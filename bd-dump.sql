-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: proyecto_tingeso
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cars`
--

DROP TABLE IF EXISTS `cars`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cars` (
  `car_mileage` int DEFAULT NULL,
  `car_seats` int DEFAULT NULL,
  `car_year` int DEFAULT NULL,
  `id` bigint NOT NULL AUTO_INCREMENT,
  `car_brand` varchar(255) DEFAULT NULL,
  `car_model` varchar(255) DEFAULT NULL,
  `car_plate` varchar(255) DEFAULT NULL,
  `car_type` varchar(255) DEFAULT NULL,
  `engine_type` varchar(255) DEFAULT NULL,
  `number_of_records` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cars`
--

LOCK TABLES `cars` WRITE;
/*!40000 ALTER TABLE `cars` DISABLE KEYS */;
INSERT INTO `cars` VALUES (100000,4,2012,1,'Mercedes Benz','C180','DHJJ99','Hatchback','Gasolina',1),(50000,5,2021,2,'Mazda','mazda6','PCCS18','Hatchback','Diesel',3),(250000,5,2010,3,'Ford','F150','CDFG89','Pickup','Diesel',1),(20000,5,2021,4,'Hyundai','ioniq','HELE71','Sedan','Electrico',1),(30000,5,2020,20,'Audi','audi8','LIJS45','SUV','Hibrido',1);
/*!40000 ALTER TABLE `cars` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `repair_record_entity_repair_type_names`
--

DROP TABLE IF EXISTS `repair_record_entity_repair_type_names`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `repair_record_entity_repair_type_names` (
  `repair_type_numbers` int DEFAULT NULL,
  `repair_record_entity_repair_record_id` bigint NOT NULL,
  KEY `FK8ofgsn0tpyayfkqn0xbaulnea` (`repair_record_entity_repair_record_id`),
  CONSTRAINT `FK8ofgsn0tpyayfkqn0xbaulnea` FOREIGN KEY (`repair_record_entity_repair_record_id`) REFERENCES `repair_records` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `repair_record_entity_repair_type_names`
--

LOCK TABLES `repair_record_entity_repair_type_names` WRITE;
/*!40000 ALTER TABLE `repair_record_entity_repair_type_names` DISABLE KEYS */;
/*!40000 ALTER TABLE `repair_record_entity_repair_type_names` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `repair_record_repair_type_price`
--

DROP TABLE IF EXISTS `repair_record_repair_type_price`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `repair_record_repair_type_price` (
  `repair_record_id` bigint NOT NULL,
  `repair_type_price_id` bigint NOT NULL,
  PRIMARY KEY (`repair_record_id`,`repair_type_price_id`),
  KEY `FKrva24age1ats5041x0yobmvk3` (`repair_type_price_id`),
  CONSTRAINT `FK6j3yu1o0pdqtdj18ovr4u4yx8` FOREIGN KEY (`repair_record_id`) REFERENCES `repair_records` (`id`),
  CONSTRAINT `FKrva24age1ats5041x0yobmvk3` FOREIGN KEY (`repair_type_price_id`) REFERENCES `repair_type_price` (`repair_type_price_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `repair_record_repair_type_price`
--

LOCK TABLES `repair_record_repair_type_price` WRITE;
/*!40000 ALTER TABLE `repair_record_repair_type_price` DISABLE KEYS */;
INSERT INTO `repair_record_repair_type_price` VALUES (62,2),(69,2),(70,9),(66,10),(71,15),(65,18),(70,21),(71,27),(68,28),(71,39);
/*!40000 ALTER TABLE `repair_record_repair_type_price` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `repair_records`
--

DROP TABLE IF EXISTS `repair_records`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `repair_records` (
  `charge_amount_age` int DEFAULT NULL,
  `charge_amount_delay` int DEFAULT NULL,
  `charge_amount_mileage` int DEFAULT NULL,
  `discount_amount_entry_date` int DEFAULT NULL,
  `discount_amount_number_of_repairs` int DEFAULT NULL,
  `discount_amount_voucher` int DEFAULT NULL,
  `entry_date` date DEFAULT NULL,
  `exit_date` date DEFAULT NULL,
  `final_cost` int DEFAULT NULL,
  `is_voucher_applied` bit(1) DEFAULT NULL,
  `pickup_date` date DEFAULT NULL,
  `total_repair_cost` int DEFAULT NULL,
  `car_id` bigint DEFAULT NULL,
  `entry_time` datetime(6) NOT NULL,
  `exit_time` datetime(6) DEFAULT NULL,
  `pickup_time` datetime(6) DEFAULT NULL,
  `id` bigint NOT NULL AUTO_INCREMENT,
  `car_plate` varchar(255) DEFAULT NULL,
  `record_status` varchar(255) DEFAULT NULL,
  `is_voucher_available` bit(1) DEFAULT NULL,
  `voucher_id` bigint DEFAULT NULL,
  `iva` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKge9jppqxtngsuhm1093okaciu` (`car_id`),
  KEY `FKdsxyejw6wle5olmdugfwo414t` (`voucher_id`),
  CONSTRAINT `FKdsxyejw6wle5olmdugfwo414t` FOREIGN KEY (`voucher_id`) REFERENCES `vouchers` (`id`),
  CONSTRAINT `FKge9jppqxtngsuhm1093okaciu` FOREIGN KEY (`car_id`) REFERENCES `cars` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `repair_records`
--

LOCK TABLES `repair_records` WRITE;
/*!40000 ALTER TABLE `repair_records` DISABLE KEYS */;
INSERT INTO `repair_records` VALUES (0,12000,24000,0,0,30000,'2024-04-25','2024-04-27',149940,_binary '','2024-04-29',120000,2,'2022-04-17 16:00:00.000000',NULL,'2024-04-29 12:07:49.197533',62,'PCCS18',NULL,_binary '',17,23940),(16500,0,30000,15000,10500,0,'2024-04-11','2024-05-03',203490,_binary '\0','2024-05-03',150000,3,'2022-04-17 15:59:00.000000','2024-05-03 00:49:54.467883','2024-05-03 00:49:56.659368',65,'CDFG89',NULL,_binary '',NULL,32490),(0,0,90000,45000,31500,0,'2024-04-08',NULL,551565,_binary '\0',NULL,450000,2,'2022-04-17 15:59:00.000000',NULL,NULL,66,'PCCS18',NULL,_binary '',NULL,88065),(0,0,7000,0,0,0,'2024-04-10','2024-04-29',127330,_binary '\0',NULL,100000,4,'2022-04-17 16:00:00.000000','2024-04-29 18:16:32.593798',NULL,68,'HELE71',NULL,NULL,NULL,20330),(0,0,24000,0,8400,0,'2024-04-10',NULL,161364,_binary '\0',NULL,120000,2,'2022-04-17 16:00:00.000000',NULL,NULL,69,'PCCS18',NULL,_binary '',NULL,25764),(40500,0,90000,0,0,0,'2024-04-10',NULL,690795,_binary '\0',NULL,450000,1,'2022-04-17 16:00:00.000000',NULL,NULL,70,'DHJJ99',NULL,NULL,NULL,110295),(0,0,74400,0,0,0,'2024-04-10',NULL,826336,_binary '\0',NULL,620000,20,'2022-04-17 16:00:00.000000',NULL,NULL,71,'LIJS45',NULL,NULL,NULL,131936);
/*!40000 ALTER TABLE `repair_records` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `repair_type_names`
--

DROP TABLE IF EXISTS `repair_type_names`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `repair_type_names` (
  `record_id` bigint NOT NULL,
  `repair_type_names` varchar(255) DEFAULT NULL,
  KEY `FK3mdun0m14deyym6ewb33text4` (`record_id`),
  CONSTRAINT `FK3mdun0m14deyym6ewb33text4` FOREIGN KEY (`record_id`) REFERENCES `repair_records` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `repair_type_names`
--

LOCK TABLES `repair_type_names` WRITE;
/*!40000 ALTER TABLE `repair_type_names` DISABLE KEYS */;
INSERT INTO `repair_type_names` VALUES (62,'Reparaciones del Sistema de Frenos'),(65,'Reparación del Sistema Eléctrico'),(66,'Reparaciones del Motor'),(68,'Reparación de Neumáticos y Ruedas'),(69,'Reparaciones del Sistema de Frenos'),(70,'Reparaciones del Motor'),(70,'Reparaciones del Sistema de Escape'),(71,'Reparación de Neumáticos y Ruedas'),(71,'Reparaciones de la Transmisión'),(71,'Reparaciones del Sistema de Combustible');
/*!40000 ALTER TABLE `repair_type_names` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `repair_type_price`
--

DROP TABLE IF EXISTS `repair_type_price`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `repair_type_price` (
  `price` int DEFAULT NULL,
  `repair_type_number` int DEFAULT NULL,
  `repair_type_price_id` bigint NOT NULL AUTO_INCREMENT,
  `engine_type` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`repair_type_price_id`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `repair_type_price`
--

LOCK TABLES `repair_type_price` WRITE;
/*!40000 ALTER TABLE `repair_type_price` DISABLE KEYS */;
INSERT INTO `repair_type_price` VALUES (120000,1,1,'Gasolina','Reparaciones del Sistema de Frenos'),(120000,1,2,'Diesel','Reparaciones del Sistema de Frenos'),(180000,1,3,'Hibrido','Reparaciones del Sistema de Frenos'),(220000,1,4,'Electrico','Reparaciones del Sistema de Frenos'),(130000,2,5,'Gasolina','Servicio del Sistema de Refrigeración'),(130000,2,6,'Diesel','Servicio del Sistema de Refrigeración'),(190000,2,7,'Hibrido','Servicio del Sistema de Refrigeración'),(230000,2,8,'Electrico','Servicio del Sistema de Refrigeración'),(350000,3,9,'Gasolina','Reparaciones del Motor'),(450000,3,10,'Diesel','Reparaciones del Motor'),(700000,3,11,'Hibrido','Reparaciones del Motor'),(800000,3,12,'Electrico','Reparaciones del Motor'),(210000,4,13,'Gasolina','Reparaciones de la Transmisión'),(210000,4,14,'Diesel','Reparaciones de la Transmisión'),(300000,4,15,'Hibrido','Reparaciones de la Transmisión'),(300000,4,16,'Electrico','Reparaciones de la Transmisión'),(150000,5,17,'Gasolina','Reparación del Sistema Eléctrico'),(150000,5,18,'Diesel','Reparación del Sistema Eléctrico'),(200000,5,19,'Hibrido','Reparación del Sistema Eléctrico'),(250000,5,20,'Electrico','Reparación del Sistema Eléctrico'),(100000,6,21,'Gasolina','Reparaciones del Sistema de Escape'),(120000,6,22,'Diesel','Reparaciones del Sistema de Escape'),(450000,6,23,'Hibrido','Reparaciones del Sistema de Escape'),(0,6,24,'Electrico','Reparaciones del Sistema de Escape'),(100000,7,25,'Gasolina','Reparación de Neumáticos y Ruedas'),(100000,7,26,'Diesel','Reparación de Neumáticos y Ruedas'),(100000,7,27,'Hibrido','Reparación de Neumáticos y Ruedas'),(100000,7,28,'Electrico','Reparación de Neumáticos y Ruedas'),(180000,8,29,'Gasolina','Reparaciones de la Suspensión y la Dirección'),(180000,8,30,'Diesel','Reparaciones de la Suspensión y la Dirección'),(210000,8,31,'Hibrido','Reparaciones de la Suspensión y la Dirección'),(250000,8,32,'Electrico','Reparaciones de la Suspensión y la Dirección'),(150000,9,33,'Gasolina','Reparación del Sistema de Aire Acondicionado y Calefacción'),(150000,9,34,'Diesel','Reparación del Sistema de Aire Acondicionado y Calefacción'),(180000,9,35,'Hibrido','Reparación del Sistema de Aire Acondicionado y Calefacción'),(180000,9,36,'Electrico','Reparación del Sistema de Aire Acondicionado y Calefacción'),(130000,10,37,'Gasolina','Reparaciones del Sistema de Combustible'),(140000,10,38,'Diesel','Reparaciones del Sistema de Combustible'),(220000,10,39,'Hibrido','Reparaciones del Sistema de Combustible'),(0,10,40,'Electrico','Reparaciones del Sistema de Combustible'),(80000,11,41,'Gasolina','Reparación y Reemplazo del Parabrisas y Cristales'),(80000,11,42,'Diesel','Reparación y Reemplazo del Parabrisas y Cristales'),(80000,11,43,'Hibrido','Reparación y Reemplazo del Parabrisas y Cristales'),(80000,11,44,'Electrico','Reparación y Reemplazo del Parabrisas y Cristales');
/*!40000 ALTER TABLE `repair_type_price` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vouchers`
--

DROP TABLE IF EXISTS `vouchers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vouchers` (
  `discount_amount` int DEFAULT NULL,
  `number_of_vouchers` int DEFAULT NULL,
  `id` bigint NOT NULL AUTO_INCREMENT,
  `brand` varchar(255) DEFAULT NULL,
  `number_of_records` int DEFAULT NULL,
  `voucher_month` varchar(255) NOT NULL,
  `voucher_year` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vouchers`
--

LOCK TABLES `vouchers` WRITE;
/*!40000 ALTER TABLE `vouchers` DISABLE KEYS */;
INSERT INTO `vouchers` VALUES (30000,2,17,'Mazda',1,'Abril',2024);
/*!40000 ALTER TABLE `vouchers` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-03  5:00:37
