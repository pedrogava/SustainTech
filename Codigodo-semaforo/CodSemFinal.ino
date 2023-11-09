#include <HCSR04.h>
//Board: DOIT ESP32 DEVKIT V1
//Autor: Fábio Henrique Cabrini
//Resumo: Esse programa possibilita ligar e desligar o led onboard, além de mandar o status para o Broker MQTT possibilitando o Helix saber
//se o led está ligado ou desligado.
//Revisões:
//Rev1: 26-08-2023 Código portado para o ESP32 e para realizar a leitura de luminosidade e publicar o valor em um tópico aprorpiado do broker 
//Autor Rev1: Lucas Demetrius Augusto 
//Rev2: 28-08-2023 Ajustes para o funcionamento no FIWARE Descomplicado
//Autor Rev2: Fábio Henrique Cabrini
#include <HCSR04.h>
#include <WiFi.h>
#include <PubSubClient.h> // Importa a Biblioteca PubSubClient
 
//defines:
//defines de id mqtt e tópicos para publicação e subscribe denominado TEF(Telemetria e Monitoramento de Equipamentos)
#define TOPICO_SUBSCRIBE    "/TEF/sem138/cmd"        //tópico MQTT de escuta
#define TOPICO_PUBLISH      "/TEF/sem138/attrs"      //tópico MQTT de envio de informações para Broker
#define TOPICO_PUBLISH_2    "/TEF/sem138/attrs/c"    //tópico MQTT de envio de informações para Broker
                                                      //IMPORTANTE: recomendamos fortemente alterar os nomes
                                                      //            desses tópicos. Caso contrário, há grandes
                                                      //            chances de você controlar e monitorar o ESP32
                                                      //            de outra pessoa.
#define ID_MQTT  "fiware_sem138"      //id mqtt (para identificação de sessão)
                                 //IMPORTANTE: este deve ser único no broker (ou seja, 
                                 //            se um client MQTT tentar entrar com o mesmo 
                                 //            id de outro já conectado ao broker, o broker 
                                 //            irá fechar a conexão de um deles).
                                 // o valor "n" precisa ser único!
#define echoPin1 4
#define trigPin1 2
#define echoPin2 5
#define trigPin2 18
// Pinos dos LEDs
const int ledVermelho1 = 32;
const int ledVermelho2 = 33;
const int ledVerde1 = 26;
const int ledVerde2 = 25;
const int ledAmarelo1 = 35;
const int ledAmarelo2 = 22;
// Sensor ultrassônico

unsigned int distancia = 0;
int car1 = 0;
int car2 = 0;
int cars = 0;
int maxi = 0;
int tempo = 0;

// WIFI
const char* SSID = "FIAP-IBM"; // SSID / nome da rede WI-FI que deseja se conectar
const char* PASSWORD = "Challenge@23!"; // Senha da rede WI-FI que deseja se conectar
  
// MQTT
const char* BROKER_MQTT = "46.17.108.113"; //URL do broker MQTT que se deseja utilizar
int BROKER_PORT = 1883; // Porta do Broker MQTT
 
int D4 = 2;

//Variáveis e objetos globais
WiFiClient espClient; // Cria o objeto espClient
PubSubClient MQTT(espClient); // Instancia o Cliente MQTT passando o objeto espClient
char EstadoSaida = '0';  //variável que armazena o estado atual da saída
  
//Prototypes
void initSerial();
void initWiFi();
void initMQTT();
void reconectWiFi(); 
void mqtt_callback(char* topic, byte* payload, unsigned int length);
void VerificaConexoesWiFIEMQTT(void);
void InitOutput(void);
 
/* 
 *  Implementações das funções
 */
void setup() 
{
    // semaforo
    pinMode(echoPin1, INPUT);
    pinMode(trigPin1, OUTPUT);
    pinMode(echoPin2, INPUT);
    pinMode(trigPin2, OUTPUT);
    pinMode(ledVermelho1, OUTPUT);
    pinMode(ledVermelho2, OUTPUT);
    pinMode(ledVerde1, OUTPUT);
    pinMode(ledVerde2, OUTPUT);
    pinMode(ledAmarelo1, OUTPUT);
    pinMode(ledAmarelo1, OUTPUT);
    //inicializações:
    InitOutput();
    initSerial();
    initWiFi();
    initMQTT();
    delay(5000);
    MQTT.publish(TOPICO_PUBLISH, "s|on");
}
  
//Função: inicializa comunicação serial com baudrate 115200 (para fins de monitorar no terminal serial 
//        o que está acontecendo.
//Parâmetros: nenhum
//Retorno: nenhum
void initSerial() 
{
    Serial.begin(115200);
}
 
//Função: inicializa e conecta-se na rede WI-FI desejada
//Parâmetros: nenhum
//Retorno: nenhum
void initWiFi() 
{
    delay(10);
    Serial.println("------Conexao WI-FI------");
    Serial.print("Conectando-se na rede: ");
    Serial.println(SSID);
    Serial.println("Aguarde");
     
    reconectWiFi();
}
  
//Função: inicializa parâmetros de conexão MQTT(endereço do 
//        broker, porta e seta função de callback)
//Parâmetros: nenhum
//Retorno: nenhum
void initMQTT() 
{
    MQTT.setServer(BROKER_MQTT, BROKER_PORT);   //informa qual broker e porta deve ser conectado
    MQTT.setCallback(mqtt_callback);            //atribui função de callback (função chamada quando qualquer informação de um dos tópicos subescritos chega)
}
  
//Função: função de callback 
//        esta função é chamada toda vez que uma informação de 
//        um dos tópicos subescritos chega)
//Parâmetros: nenhum
//Retorno: nenhum
void mqtt_callback(char* topic, byte* payload, unsigned int length) 
{
    String msg;
     
    //obtem a string do payload recebido
    for(int i = 0; i < length; i++) 
    {
       char c = (char)payload[i];
       msg += c;
    }
    
    Serial.print("- Mensagem recebida: ");
    Serial.println(msg);
    
    //toma ação dependendo da string recebida:
    //verifica se deve colocar nivel alto de tensão na saída D0:
    //IMPORTANTE: o Led já contido na placa é acionado com lógica invertida (ou seja,
    //enviar HIGH para o output faz o Led apagar / enviar LOW faz o Led acender)
    if (msg.equals("lamp001@on|"))
    {
        digitalWrite(D4, HIGH);
        EstadoSaida = '1';
    }
 
    //verifica se deve colocar nivel alto de tensão na saída D0:
    if (msg.equals("lamp001@off|"))
    {
        digitalWrite(D4, LOW);
        EstadoSaida = '0';
    }
     
}
  
//Função: reconecta-se ao broker MQTT (caso ainda não esteja conectado ou em caso de a conexão cair)
//        em caso de sucesso na conexão ou reconexão, o subscribe dos tópicos é refeito.
//Parâmetros: nenhum
//Retorno: nenhum
void reconnectMQTT() 
{
    while (!MQTT.connected()) 
    {
        Serial.print("* Tentando se conectar ao Broker MQTT: ");
        Serial.println(BROKER_MQTT);
        if (MQTT.connect(ID_MQTT)) 
        {
            Serial.println("Conectado com sucesso ao broker MQTT!");
            MQTT.subscribe(TOPICO_SUBSCRIBE); 
        } 
        else
        {
            Serial.println("Falha ao reconectar no broker.");
            Serial.println("Havera nova tentatica de conexao em 2s");
            delay(2000);
        }
    }
}
  
//Função: reconecta-se ao WiFi
//Parâmetros: nenhum
//Retorno: nenhum
void reconectWiFi() 
{
    //se já está conectado a rede WI-FI, nada é feito. 
    //Caso contrário, são efetuadas tentativas de conexão
    if (WiFi.status() == WL_CONNECTED)
        return;
         
    WiFi.begin(SSID, PASSWORD); // Conecta na rede WI-FI
     
    while (WiFi.status() != WL_CONNECTED) 
    {
        delay(100);
        Serial.print(".");
    }
   
    Serial.println();
    Serial.print("Conectado com sucesso na rede ");
    Serial.print(SSID);
    Serial.println("IP obtido: ");
    Serial.println(WiFi.localIP());
}
 
//Função: verifica o estado das conexões WiFI e ao broker MQTT. 
//        Em caso de desconexão (qualquer uma das duas), a conexão
//        é refeita.
//Parâmetros: nenhum
//Retorno: nenhum
void VerificaConexoesWiFIEMQTT(void)
{
    if (!MQTT.connected()){ 
        reconnectMQTT(); //se não há conexão com o Broker, a conexão é refeita
    } 
     reconectWiFi(); //se não há conexão com o WiFI, a conexão é refeita
}
 
//Função: envia ao Broker o estado atual do output 
//Parâmetros: nenhum
//Retorno: nenhum

 
//Função: inicializa o output em nível lógico baixo
//Parâmetros: nenhum
//Retorno: nenhum
void InitOutput(void)
{
    //IMPORTANTE: o Led já contido na placa é acionado com lógica invertida (ou seja,
    //enviar HIGH para o output faz o Led apagar / enviar LOW faz o Led acender)
    pinMode(D4, OUTPUT);
    digitalWrite(D4, HIGH);
    
    boolean toggle = false;

    for(int i = 0; i <= 10; i++)
    {
        toggle = !toggle;
        digitalWrite(D4,toggle);
        delay(200);           
    }
}

// Função para iniciar a medição
long duracao1(){
  digitalWrite(trigPin1, LOW);
  delayMicroseconds(500);
  // Sets the trigger pin to HIGH state for 10 microseconds
  digitalWrite(trigPin1, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin1, LOW);
  // Reads the echo pin, and returns the sound wave travel time in microseconds
  return pulseIn(echoPin1, HIGH);
}
long duracao2(){
  digitalWrite(trigPin2, LOW);
  delayMicroseconds(500);
  // Sets the trigger pin to HIGH state for 10 microseconds
  digitalWrite(trigPin2, HIGH);
  delayMicroseconds(10);
  digitalWrite(trigPin2, LOW);
  // Reads the echo pin, and returns the sound wave travel time in microseconds
  return pulseIn(echoPin2, HIGH);
}

//Função contadora de carros
int carros1(){
 distancia = duracao1() * 0.01723; // Valor em centímetros

 if (distancia <= maxi - 200 && distancia > maxi - 300){
  car1 = car1 + 1;
  cars += 1;
  Serial.print("Carros na 1 via: ");
  Serial.println(car1);
  Serial.print("carros: ");
  Serial.println(cars);
 }
 return cars, car1;
}

int carros2(){
 distancia = duracao2() * 0.01723; // Valor em centímetros

 if (distancia <= maxi - 200 && distancia > maxi - 300){
  car2 = car2 + 1;
  cars += 1;
  Serial.print("Carros na 2 via: ");
  Serial.println(car2);
  Serial.print("carros: ");
  Serial.println(cars);
 }
 return cars, car2;
}
    
void superDelay(unsigned long tempoDeEspera) {
  unsigned long inicio = millis(); // ANOTA O TEMPO QUE INICIOU A FUNÇÃO

  while (millis() - inicio < tempoDeEspera) { // LAÇO PARA O ARDUINO ESPERAR O TEMPO PASSAR
    // === COLOQUE SUA LÓGICA AQUI ===
    
      // === LÓGICA PARA CONTAGEM DE CARROS ===
    delay(200);
    carros1();
    carros2();
      // === FIM DA LÓGICA PARA CONTAGEM DE CARROS ===
    // FIM DA LÓGICA DENTRO DO SUPERDELAY
  }
}

//programa principal
void loop() 
{   
    const int potPin = 34;
    
    char msgBuffer[6];
    //garante funcionamento das conexões WiFi e ao broker MQTT
    VerificaConexoesWiFIEMQTT();
 
    //envia o status de todos os outputs para o Broker no protocolo esperado
   

   maxi = 300;
  // Farol
  digitalWrite(ledVermelho1, HIGH);
  digitalWrite(ledVerde2, HIGH);
   if (car1 >= 1|| car2>= 1) {
    tempo = 20000 - (car1 * 2000);
    superDelay(tempo);
    digitalWrite(ledVermelho1, LOW);
    digitalWrite(ledVerde2, LOW);
    digitalWrite(ledAmarelo2, HIGH);
    digitalWrite(ledAmarelo2, LOW);
    digitalWrite(ledVermelho2, HIGH); 
    superDelay(1000);
    digitalWrite(ledVerde1, HIGH);   
    superDelay(5000);
    car1 = 0;
    car2 = 0;
    digitalWrite(ledVerde1, LOW);
    digitalWrite(ledVermelho2, LOW);
    digitalWrite(ledAmarelo1, HIGH);
    superDelay(1000);
    digitalWrite(ledAmarelo1, LOW);
    digitalWrite(ledVerde2, HIGH);
  }
  
  else{
  carros1();
  carros2();
  }
    /*Serial.print("Carros na via: ");
    Serial.println(car1);
    Serial.print("carros: ");
    Serial.println(cars);
    //luminosidade
    /*int sensorValue = analogRead(potPin);   // Ler o pino Analógico onde está o LDR, lembrando que o divisor de tensão é Vin = Vout (R2/(R1 + R2))
    Serial.println(sensorValue);
    int luminosity = map(sensorValue, 0, 4095, 0, 100); // Normalizar o valor da luminosidade entre 0% e 100%
    Serial.println(luminosity);
    dtostrf(luminosity, 4, 2, msgBuffer);
    MQTT.publish(TOPICO_PUBLISH_2,msgBuffer);*/
  dtostrf(cars, 4, 2, msgBuffer);
  MQTT.publish(TOPICO_PUBLISH_2,msgBuffer);
  //keep-alive da comunicação com broker MQTT
  MQTT.loop();
}
