-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 24 Maj 2022, 18:29
-- Wersja serwera: 10.4.16-MariaDB
-- Wersja PHP: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `zajazd`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `oferts`
--

CREATE TABLE `oferts` (
  `ID` int(11) NOT NULL,
  `CATEGORY` int(11) NOT NULL,
  `NAME` varchar(27) NOT NULL,
  `LORE` varchar(999) NOT NULL,
  `SMALL` float NOT NULL,
  `MEDIUM` float NOT NULL,
  `BIG` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `oferts`
--

INSERT INTO `oferts` (`ID`, `CATEGORY`, `NAME`, `LORE`, `SMALL`, `MEDIUM`, `BIG`) VALUES
(1, 1, 'Margaritta', 'Sos i ser', 24, 28, 32),
(2, 1, 'Hawajska', 'Sos, ser, kurczak i ananas', 25, 29, 33),
(3, 2, 'Pierogi z serem', '', 12, 0, 0),
(4, 2, 'Filet z kurczaka', 'Ziemniaki, filet z kurczaka i trzy surówki.', 17, 0, 0);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `orders`
--

CREATE TABLE `orders` (
  `ID` int(11) NOT NULL,
  `NR` varchar(155) NOT NULL,
  `COUT` varchar(155) NOT NULL,
  `SIZE` varchar(155) NOT NULL,
  `NAME` varchar(444) NOT NULL,
  `SUBNAME` varchar(444) NOT NULL,
  `PHONE` int(11) NOT NULL,
  `ADRES` varchar(414) NOT NULL,
  `PRICE` int(11) NOT NULL,
  `PROGRES` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `orders`
--

INSERT INTO `orders` (`ID`, `NR`, `COUT`, `SIZE`, `NAME`, `SUBNAME`, `PHONE`, `ADRES`, `PRICE`, `PROGRES`) VALUES
(1, '4,1,2', '1,2,', '0,2,0', 'marek', 'tomal', 883512491, 'kwiatowa 83', 0, 0),
(2, '4,1,2', '2,', '0,2,0', 'adxcz', 'sada', 1241236, 'gad123', 0, 0),
(3, '4,1,2', '1,2,1', '0,2,3', 'asdz', 'asd', 123666123, 'fafs124', 0, 0),
(4, '', '2', '0', 'jolanta', 'figa', 77372183, 'rum 124', 0, 0),
(5, '3', '2', '0', 'zosia', 'rula', 28142157, 'mufinowa 23', 0, 0),
(6, '1', '1', '2', 'dawid', 'pysznski', 288228212, 'kazimierza 12', 0, 0),
(7, '1,2', '', '0', 'mirek', 'asd', 82821234, 'asda', 0, 2),
(8, '', '', '0', 'maju', 'maju', 123123, 'maju', 0, 1),
(9, '1', '2', '2', 'kunia', 'asda', 128381283, 'asdjiasd 12', 0, 1),
(10, '1', '2', '', 'sadoi', 'sjadoij', 213823321, 'jaisodja', 0, 1);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `ticket`
--

CREATE TABLE `ticket` (
  `ID` varchar(16) NOT NULL,
  `PROC` int(11) NOT NULL,
  `USE` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `ticket`
--

INSERT INTO `ticket` (`ID`, `PROC`, `USE`) VALUES
('KAMIL', 10, 110),
('XD', 60, 4);

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `oferts`
--
ALTER TABLE `oferts`
  ADD PRIMARY KEY (`ID`);

--
-- Indeksy dla tabeli `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`ID`);

--
-- Indeksy dla tabeli `ticket`
--
ALTER TABLE `ticket`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `oferts`
--
ALTER TABLE `oferts`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT dla tabeli `orders`
--
ALTER TABLE `orders`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
