<h1 align="center"> Fiware Smart Traffic Light! </h1>

<p align="center">
<img src="https://img.shields.io/badge/STATUS-em%20Desenvolvimento-green"/>
</p>
<p align="center">
<img src="https://github.com/pedrogava/EDGE_COMPUTING/assets/126473513/d1dcbde5-ca99-48df-b3da-a8a2e89c09ca"/>
</p>


# Introduction

## Definition of smart traffic lights:
+ Smart traffic lights are traffic control systems based on advanced technology, such as sensors, cameras and communication systems, that are capable of monitoring traffic in real time and adapting signal duration to optimize traffic flow. These systems can be programmed to react to a variety of traffic situations, such as traffic jams, accidents, roadworks and special events, to ensure traffic flows smoothly and safely.

## The importance for traffic:
+ Smart traffic lights are important because they allow traffic control to be controlled more efficiently and safely, as well as being able to adapt to traffic conditions in real time. With these systems, it is possible to monitor the movement of vehicles and pedestrians and adjust the duration of traffic signals to optimize the flow of vehicles and reduce congestion.



# 📁 Essential resources

## FIWARE

<p align="center">
<img src="https://github.com/pedrogava/EDGE_COMPUTING/assets/126473513/e8bee338-fa0c-4ffb-9d9c-a11e9f50d06d"/>
</p>

+ ## Software Requirements

Docker and Docker-Compose

Click <a href=https://docs.docker.com/engine/install/ubuntu/> here </a> to see instructions for installing Docker and Docker-Compose on Ubuntu Server LTS.

+ ## Installation and Startup

git clone https://github.com/fabiocabrini/fiware

cd fiware

docker compose up -d

+ ## Turn off

docker compose down

**Note:** FIWARE Uncomplicated uses volumes, so your data will not be lost when you turn it off!

**Volume:** /var/lib/docker/volumes/fiware_db-data/_data

+ ## Hardware Requirements 

Processing Cores - **1vCPU**

RAM memory - **1GB** 

Minimum Secondary Storage - **20GB HD and/or SSD** (Depends on application requirements).

+ ## Freeing Ports on the Firewall

1026/TCP  - **API Orion Context Broker**

1883/TCP  - **Eclipse-Mosquito MQTT** 

4041/TCP  - **API IoT-Agent MQTT**

8666/TCP  - **API STH-Comet**

27017/TCP - **MongoDB**

+ ## Collection do Postman (Material for experimentation)

Here you will find a set of collections designed to be imported by the Postman tool. These collections will help you interact with the Orion Context Broker, IoT Agent MQTT and STH-Comet components, present in the FIWARE Descomplicado architecture.

Click <a href="https://github.com/pedrogava/EDGE_COMPUTING/blob/main/FIWARE.postman_collection.json"> here </a> to access the Postman collection.


# Iot Device

## Prototype:

### Hardware Requirements:

- ESP2866
- WIFI conection
<h4 align="center"> 
    🚧 Prototype under construction 🚧
</h4>

# Authors:

Rm 98501 - Kauê

Rm 551445 - Pedro Valotto

Rm 551965 - Nicolas Boni

Rm 551043 - Pedro Gava

<h4 align="center"> 
    🚧 Project under construction 🚧
</h4>