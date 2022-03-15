<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class SeedOpstine extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        \DB::table('opstinas')->insert(array (
            0 => 
            array (
                'id' => 1,
                'sifra' => '201',
                'naziv' => 'Ada',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '80012',
            ),
            1 => 
            array (
                'id' => 2,
                'sifra' => '1',
                'naziv' => 'Aleksandrovac',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70017',
            ),
            2 => 
            array (
                'id' => 3,
                'sifra' => '2',
                'naziv' => 'Aleksinac',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70025',
            ),
            3 => 
            array (
                'id' => 4,
                'sifra' => '202',
                'naziv' => 'Alibunar',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '80039',
            ),
            4 => 
            array (
                'id' => 5,
                'sifra' => '203',
                'naziv' => 'Apatin',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '80047',
            ),
            5 => 
            array (
                'id' => 6,
                'sifra' => '3',
                'naziv' => 'Aranđelovac',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70033',
            ),
            6 => 
            array (
                'id' => 7,
                'sifra' => '4',
                'naziv' => 'Arilje',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70041',
            ),
            7 => 
            array (
                'id' => 8,
                'sifra' => '6',
                'naziv' => 'Babušnica',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70050',
            ),
            8 => 
            array (
                'id' => 9,
                'sifra' => '7',
                'naziv' => 'Bajina Bašta',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70068',
            ),
            9 => 
            array (
                'id' => 10,
                'sifra' => '10',
                'naziv' => 'Barajevo',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70092',
            ),
            10 => 
            array (
                'id' => 11,
                'sifra' => '8',
                'naziv' => 'Batočina',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70076',
            ),
            11 => 
            array (
                'id' => 12,
                'sifra' => '204',
                'naziv' => 'Bač',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '80055',
            ),
            12 => 
            array (
                'id' => 13,
                'sifra' => '205',
                'naziv' => 'Bačka Palanka',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '80063',
            ),
            13 => 
            array (
                'id' => 14,
                'sifra' => '206',
                'naziv' => 'Bačka Topola',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '80071',
            ),
            14 => 
            array (
                'id' => 15,
                'sifra' => '207',
                'naziv' => 'Bački Petrovac',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '80080',
            ),
            15 => 
            array (
                'id' => 16,
                'sifra' => '9',
                'naziv' => 'Bela Palanka',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70084',
            ),
            16 => 
            array (
                'id' => 17,
                'sifra' => '209',
                'naziv' => 'Bela Crkva',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '80098',
            ),
            17 => 
            array (
                'id' => 18,
                'sifra' => '210',
                'naziv' => 'Beočin',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '80101',
            ),
            18 => 
            array (
                'id' => 19,
                'sifra' => '208',
                'naziv' => 'Bečej',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '80110',
            ),
            19 => 
            array (
                'id' => 20,
                'sifra' => '23',
                'naziv' => 'Blace',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70262',
            ),
            20 => 
            array (
                'id' => 21,
                'sifra' => '24',
                'naziv' => 'Bogatić',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70289',
            ),
            21 => 
            array (
                'id' => 22,
                'sifra' => '25',
                'naziv' => 'Bojnik',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70297',
            ),
            22 => 
            array (
                'id' => 23,
                'sifra' => '26',
                'naziv' => 'Boljevac',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70319',
            ),
            23 => 
            array (
                'id' => 24,
                'sifra' => '27',
                'naziv' => 'Bor',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70327',
            ),
            24 => 
            array (
                'id' => 25,
                'sifra' => '28',
                'naziv' => 'Bosilegrad',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70335',
            ),
            25 => 
            array (
                'id' => 26,
                'sifra' => '29',
                'naziv' => 'Brus',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70343',
            ),
            26 => 
            array (
                'id' => 27,
                'sifra' => '30',
                'naziv' => 'Bujanovac',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70351',
            ),
            27 => 
            array (
                'id' => 28,
                'sifra' => '107',
                'naziv' => 'Valjevo',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70360',
            ),
            28 => 
            array (
                'id' => 29,
                'sifra' => '108',
                'naziv' => 'Varvarin',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70378',
            ),
            29 => 
            array (
                'id' => 30,
                'sifra' => '109',
                'naziv' => 'Velika Plana',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70386',
            ),
            30 => 
            array (
                'id' => 31,
                'sifra' => '110',
                'naziv' => 'Veliko Gradište',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70394',
            ),
            31 => 
            array (
                'id' => 32,
                'sifra' => '321',
                'naziv' => 'Vitina',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '90018',
            ),
            32 => 
            array (
                'id' => 33,
                'sifra' => '112',
                'naziv' => 'Vladimirci',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70408',
            ),
            33 => 
            array (
                'id' => 34,
                'sifra' => '111',
                'naziv' => 'Vladičin Han',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70416',
            ),
            34 => 
            array (
                'id' => 35,
                'sifra' => '113',
                'naziv' => 'Vlasotince',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70424',
            ),
            35 => 
            array (
                'id' => 36,
                'sifra' => '19',
                'naziv' => 'Voždovac',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70106',
            ),
            36 => 
            array (
                'id' => 37,
                'sifra' => '114',
                'naziv' => 'Vranje',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70432',
            ),
            37 => 
            array (
                'id' => 38,
                'sifra' => '20',
                'naziv' => 'Vračar',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70114',
            ),
            38 => 
            array (
                'id' => 39,
                'sifra' => '240',
                'naziv' => 'Vrbas',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '80462',
            ),
            39 => 
            array (
                'id' => 40,
                'sifra' => '115',
                'naziv' => 'Vrnjačka Banja',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70459',
            ),
            40 => 
            array (
                'id' => 41,
                'sifra' => '241',
                'naziv' => 'Vršac',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '80128',
            ),
            41 => 
            array (
                'id' => 42,
                'sifra' => '322',
                'naziv' => 'Vučitrn',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '90026',
            ),
            42 => 
            array (
                'id' => 43,
                'sifra' => '39',
                'naziv' => 'Gadžin Han',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70467',
            ),
            43 => 
            array (
                'id' => 44,
                'sifra' => '304',
                'naziv' => 'Glogovac',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '90034',
            ),
            44 => 
            array (
                'id' => 45,
                'sifra' => '305',
                'naziv' => 'Gnjilane',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '90042',
            ),
            45 => 
            array (
                'id' => 46,
                'sifra' => '40',
                'naziv' => 'Golubac',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70475',
            ),
            46 => 
            array (
                'id' => 47,
                'sifra' => '331',
                'naziv' => 'Gora',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '90336',
            ),
            47 => 
            array (
                'id' => 48,
                'sifra' => '41',
                'naziv' => 'Gornji Milanovac',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70483',
            ),
            48 => 
            array (
                'id' => 49,
                'sifra' => '12',
                'naziv' => 'Grocka',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70122',
            ),
            49 => 
            array (
                'id' => 50,
                'sifra' => '36',
                'naziv' => 'Despotovac',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70491',
            ),
            50 => 
            array (
                'id' => 51,
                'sifra' => '301',
                'naziv' => 'Dečani',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '90069',
            ),
            51 => 
            array (
                'id' => 52,
                'sifra' => '37',
                'naziv' => 'Dimitrovgrad',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70505',
            ),
            52 => 
            array (
                'id' => 53,
                'sifra' => '38',
                'naziv' => 'Doljevac',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70513',
            ),
            53 => 
            array (
                'id' => 54,
                'sifra' => '303',
                'naziv' => 'Đakovica',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '90085',
            ),
            54 => 
            array (
                'id' => 55,
                'sifra' => '243',
                'naziv' => 'Žabalj',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '80136',
            ),
            55 => 
            array (
                'id' => 56,
                'sifra' => '117',
                'naziv' => 'Žabari',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70521',
            ),
            56 => 
            array (
                'id' => 57,
                'sifra' => '118',
                'naziv' => 'Žagubica',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70530',
            ),
            57 => 
            array (
                'id' => 58,
                'sifra' => '244',
                'naziv' => 'Žitište',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '80144',
            ),
            58 => 
            array (
                'id' => 59,
                'sifra' => '119',
                'naziv' => 'Žitorađa',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70548',
            ),
            59 => 
            array (
                'id' => 60,
                'sifra' => '116',
                'naziv' => 'Zaječar',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70556',
            ),
            60 => 
            array (
                'id' => 61,
                'sifra' => '22',
                'naziv' => 'Zvezdara',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70149',
            ),
            61 => 
            array (
                'id' => 62,
                'sifra' => '330',
                'naziv' => 'Zvečan',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '90352',
            ),
            62 => 
            array (
                'id' => 63,
                'sifra' => '21',
                'naziv' => 'Zemun',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70157',
            ),
            63 => 
            array (
                'id' => 64,
                'sifra' => '242',
                'naziv' => 'Zrenjanin',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '80152',
            ),
            64 => 
            array (
                'id' => 65,
                'sifra' => '324',
                'naziv' => 'Zubin Potok',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '90093',
            ),
            65 => 
            array (
                'id' => 66,
                'sifra' => '42',
                'naziv' => 'Ivanjica',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70564',
            ),
            66 => 
            array (
                'id' => 67,
                'sifra' => '212',
                'naziv' => 'Inđija',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '80179',
            ),
            67 => 
            array (
                'id' => 68,
                'sifra' => '213',
                'naziv' => 'Irig',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '80187',
            ),
            68 => 
            array (
                'id' => 69,
                'sifra' => '306',
                'naziv' => 'Istok',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '90107',
            ),
            69 => 
            array (
                'id' => 70,
                'sifra' => '96',
                'naziv' => 'Jagodina',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '71048',
            ),
            70 => 
            array (
                'id' => 71,
                'sifra' => '214',
                'naziv' => 'Kanjiža',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '80195',
            ),
            71 => 
            array (
                'id' => 72,
                'sifra' => '307',
                'naziv' => 'Kačanik',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '90115',
            ),
            72 => 
            array (
                'id' => 73,
                'sifra' => '215',
                'naziv' => 'Kikinda',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '80209',
            ),
            73 => 
            array (
                'id' => 74,
                'sifra' => '43',
                'naziv' => 'Kladovo',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70572',
            ),
            74 => 
            array (
                'id' => 75,
                'sifra' => '308',
                'naziv' => 'Klina',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '90123',
            ),
            75 => 
            array (
                'id' => 76,
                'sifra' => '44',
                'naziv' => 'Knić',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70599',
            ),
            76 => 
            array (
                'id' => 77,
                'sifra' => '45',
                'naziv' => 'Knjaževac',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70602',
            ),
            77 => 
            array (
                'id' => 78,
                'sifra' => '216',
                'naziv' => 'Kovačica',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '80217',
            ),
            78 => 
            array (
                'id' => 79,
                'sifra' => '217',
                'naziv' => 'Kovin',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '80225',
            ),
            79 => 
            array (
                'id' => 80,
                'sifra' => '48',
                'naziv' => 'Kosjerić',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70629',
            ),
            80 => 
            array (
                'id' => 81,
                'sifra' => '328',
                'naziv' => 'Kosovo Polje',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '90131',
            ),
            81 => 
            array (
                'id' => 82,
                'sifra' => '309',
                'naziv' => 'Kosovska Kamenica',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '90140',
            ),
            82 => 
            array (
                'id' => 83,
                'sifra' => '310',
                'naziv' => 'Kosovska Mitrovica',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '90298',
            ),
            83 => 
            array (
                'id' => 84,
                'sifra' => '46',
                'naziv' => 'Koceljeva',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70637',
            ),
            84 => 
            array (
                'id' => 85,
                'sifra' => '49',
                'naziv' => 'Kragujevac',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70645',
            ),
            85 => 
            array (
                'id' => 86,
                'sifra' => '50',
                'naziv' => 'Kraljevo',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70653',
            ),
            86 => 
            array (
                'id' => 87,
                'sifra' => '51',
                'naziv' => 'Krupanj',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70661',
            ),
            87 => 
            array (
                'id' => 88,
                'sifra' => '52',
                'naziv' => 'Kruševac',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70670',
            ),
            88 => 
            array (
                'id' => 89,
                'sifra' => '218',
                'naziv' => 'Kula',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '80233',
            ),
            89 => 
            array (
                'id' => 90,
                'sifra' => '54',
                'naziv' => 'Kuršumlija',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70688',
            ),
            90 => 
            array (
                'id' => 91,
                'sifra' => '53',
                'naziv' => 'Kučevo',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70696',
            ),
            91 => 
            array (
                'id' => 92,
                'sifra' => '56',
                'naziv' => 'Lazarevac',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70165',
            ),
            92 => 
            array (
                'id' => 93,
                'sifra' => '55',
                'naziv' => 'Lajkovac',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70700',
            ),
            93 => 
            array (
                'id' => 94,
                'sifra' => '121',
                'naziv' => 'Lapovo',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '71277',
            ),
            94 => 
            array (
                'id' => 95,
                'sifra' => '57',
                'naziv' => 'Lebane',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70718',
            ),
            95 => 
            array (
                'id' => 96,
                'sifra' => '311',
                'naziv' => 'Leposavić',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '90158',
            ),
            96 => 
            array (
                'id' => 97,
                'sifra' => '58',
                'naziv' => 'Leskovac',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70726',
            ),
            97 => 
            array (
                'id' => 98,
                'sifra' => '312',
                'naziv' => 'Lipljan',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '90166',
            ),
            98 => 
            array (
                'id' => 99,
                'sifra' => '59',
                'naziv' => 'Loznica',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70734',
            ),
            99 => 
            array (
                'id' => 100,
                'sifra' => '60',
                'naziv' => 'Lučani',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70742',
            ),
            100 => 
            array (
                'id' => 102,
                'sifra' => '61',
                'naziv' => 'Ljig',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70769',
            ),
            101 => 
            array (
                'id' => 103,
                'sifra' => '62',
                'naziv' => 'Ljubovija',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70777',
            ),
            102 => 
            array (
                'id' => 104,
                'sifra' => '63',
                'naziv' => 'Majdanpek',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70785',
            ),
            103 => 
            array (
                'id' => 105,
                'sifra' => '63',
                'naziv' => 'Majdanpek',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '',
            ),
            104 => 
            array (
                'id' => 106,
                'sifra' => '65',
                'naziv' => 'Mali Zvornik',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70793',
            ),
            105 => 
            array (
                'id' => 107,
                'sifra' => '219',
                'naziv' => 'Mali Iđoš',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '80241',
            ),
            106 => 
            array (
                'id' => 108,
                'sifra' => '66',
                'naziv' => 'Malo Crniće',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70807',
            ),
            107 => 
            array (
                'id' => 109,
                'sifra' => '67',
                'naziv' => 'Medveđa',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70815',
            ),
            108 => 
            array (
                'id' => 110,
                'sifra' => '128',
                'naziv' => 'Mediana',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '71331',
            ),
            109 => 
            array (
                'id' => 111,
                'sifra' => '68',
                'naziv' => 'Merošina',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70823',
            ),
            110 => 
            array (
                'id' => 112,
                'sifra' => '69',
                'naziv' => 'Mionica',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70831',
            ),
            111 => 
            array (
                'id' => 113,
                'sifra' => '70',
                'naziv' => 'Mladenovac',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70173',
            ),
            112 => 
            array (
                'id' => 114,
                'sifra' => '72',
                'naziv' => 'Negotin',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70840',
            ),
            113 => 
            array (
                'id' => 115,
                'sifra' => '122',
                'naziv' => 'Niška Banja',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '71285',
            ),
            114 => 
            array (
                'id' => 116,
                'sifra' => '74',
                'naziv' => 'Nova Varoš',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70866',
            ),
            115 => 
            array (
                'id' => 117,
                'sifra' => '220',
                'naziv' => 'Nova Crnja',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '80250',
            ),
            116 => 
            array (
                'id' => 118,
                'sifra' => '13',
                'naziv' => 'Novi Beograd',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70181',
            ),
            117 => 
            array (
                'id' => 119,
                'sifra' => '221',
                'naziv' => 'Novi Bečej',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '80268',
            ),
            118 => 
            array (
                'id' => 120,
                'sifra' => '222',
                'naziv' => 'Novi Kneževac',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '80276',
            ),
            119 => 
            array (
                'id' => 121,
                'sifra' => '75',
                'naziv' => 'Novi Pazar',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70874',
            ),
            120 => 
            array (
                'id' => 122,
                'sifra' => '223',
                'naziv' => 'Novi Sad',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '80284',
            ),
            121 => 
            array (
                'id' => 123,
                'sifra' => '329',
                'naziv' => 'Novo Brdo',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '90182',
            ),
            122 => 
            array (
                'id' => 124,
                'sifra' => '327',
                'naziv' => 'Obilić',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '90204',
            ),
            123 => 
            array (
                'id' => 125,
                'sifra' => '14',
                'naziv' => 'Obrenovac',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70190',
            ),
            124 => 
            array (
                'id' => 126,
                'sifra' => '225',
                'naziv' => 'Opovo',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '80292',
            ),
            125 => 
            array (
                'id' => 127,
                'sifra' => '313',
                'naziv' => 'Orahovac',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '90212',
            ),
            126 => 
            array (
                'id' => 128,
                'sifra' => '76',
                'naziv' => 'Osečina',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70882',
            ),
            127 => 
            array (
                'id' => 129,
                'sifra' => '224',
                'naziv' => 'Odžaci',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '80306',
            ),
            128 => 
            array (
                'id' => 130,
                'sifra' => '15',
                'naziv' => 'Palilula',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70203',
            ),
            129 => 
            array (
                'id' => 131,
                'sifra' => '127',
            'naziv' => 'Palilula (Niš)',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '71323',
            ),
            130 => 
            array (
                'id' => 132,
                'sifra' => '125',
                'naziv' => 'Pantelej',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '71307',
            ),
            131 => 
            array (
                'id' => 133,
                'sifra' => '226',
                'naziv' => 'Pančevo',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '80314',
            ),
            132 => 
            array (
                'id' => 134,
                'sifra' => '77',
                'naziv' => 'Paraćin',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70904',
            ),
            133 => 
            array (
                'id' => 135,
                'sifra' => '247',
                'naziv' => 'Petrovaradin',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '80519',
            ),
            134 => 
            array (
                'id' => 136,
                'sifra' => '78',
                'naziv' => 'Petrovac na Mlavi',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70912',
            ),
            135 => 
            array (
                'id' => 137,
                'sifra' => '314',
                'naziv' => 'Peć',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '90239',
            ),
            136 => 
            array (
                'id' => 138,
                'sifra' => '227',
                'naziv' => 'Pećinci',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '80322',
            ),
            137 => 
            array (
                'id' => 139,
                'sifra' => '79',
                'naziv' => 'Pirot',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70939',
            ),
            138 => 
            array (
                'id' => 140,
                'sifra' => '228',
                'naziv' => 'Plandište',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '80349',
            ),
            139 => 
            array (
                'id' => 141,
                'sifra' => '315',
                'naziv' => 'Podujevo',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '90247',
            ),
            140 => 
            array (
                'id' => 142,
                'sifra' => '80',
                'naziv' => 'Požarevac',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70947',
            ),
            141 => 
            array (
                'id' => 143,
                'sifra' => '81',
                'naziv' => 'Požega',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70955',
            ),
            142 => 
            array (
                'id' => 144,
                'sifra' => '82',
                'naziv' => 'Preševo',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70963',
            ),
            143 => 
            array (
                'id' => 145,
                'sifra' => '83',
                'naziv' => 'Priboj',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70971',
            ),
            144 => 
            array (
                'id' => 146,
                'sifra' => '317',
                'naziv' => 'Prizren',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '90255',
            ),
            145 => 
            array (
                'id' => 147,
                'sifra' => '84',
                'naziv' => 'Prijepolje',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70980',
            ),
            146 => 
            array (
                'id' => 148,
                'sifra' => '316',
                'naziv' => 'Priština',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '90263',
            ),
            147 => 
            array (
                'id' => 149,
                'sifra' => '85',
                'naziv' => 'Prokuplje',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70998',
            ),
            148 => 
            array (
                'id' => 150,
                'sifra' => '88',
                'naziv' => 'Ražanj',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '71005',
            ),
            149 => 
            array (
                'id' => 151,
                'sifra' => '120',
                'naziv' => 'Rakovica',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70211',
            ),
            150 => 
            array (
                'id' => 152,
                'sifra' => '86',
                'naziv' => 'Rača',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '71013',
            ),
            151 => 
            array (
                'id' => 153,
                'sifra' => '87',
                'naziv' => 'Raška',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '71021',
            ),
            152 => 
            array (
                'id' => 154,
                'sifra' => '89',
                'naziv' => 'Rekovac',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '71030',
            ),
            153 => 
            array (
                'id' => 155,
                'sifra' => '229',
                'naziv' => 'Ruma',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '80357',
            ),
            154 => 
            array (
                'id' => 156,
                'sifra' => '16',
                'naziv' => 'Savski venac',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70220',
            ),
            155 => 
            array (
                'id' => 157,
                'sifra' => '97',
                'naziv' => 'Svilajnac',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '71056',
            ),
            156 => 
            array (
                'id' => 158,
                'sifra' => '98',
                'naziv' => 'Svrljig',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '71064',
            ),
            157 => 
            array (
                'id' => 159,
                'sifra' => '231',
                'naziv' => 'Senta',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '80365',
            ),
            158 => 
            array (
                'id' => 160,
                'sifra' => '230',
                'naziv' => 'Sečanj',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '80373',
            ),
            159 => 
            array (
                'id' => 161,
                'sifra' => '91',
                'naziv' => 'Sjenica',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '71072',
            ),
            160 => 
            array (
                'id' => 162,
                'sifra' => '92',
                'naziv' => 'Smederevo',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '71099',
            ),
            161 => 
            array (
                'id' => 163,
                'sifra' => '93',
                'naziv' => 'Smederevska Palanka',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '71102',
            ),
            162 => 
            array (
                'id' => 164,
                'sifra' => '94',
                'naziv' => 'Sokobanja',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '71129',
            ),
            163 => 
            array (
                'id' => 165,
                'sifra' => '232',
                'naziv' => 'Sombor',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '80381',
            ),
            164 => 
            array (
                'id' => 166,
                'sifra' => '17',
                'naziv' => 'Sopot',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70238',
            ),
            165 => 
            array (
                'id' => 167,
                'sifra' => '318',
                'naziv' => 'Srbica',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '90271',
            ),
            166 => 
            array (
                'id' => 168,
                'sifra' => '233',
                'naziv' => 'Srbobran',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '80390',
            ),
            167 => 
            array (
                'id' => 169,
                'sifra' => '234',
                'naziv' => 'Sremska Mitrovica',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '80403',
            ),
            168 => 
            array (
                'id' => 170,
                'sifra' => '250',
                'naziv' => 'Sremski Karlovci',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '80411',
            ),
            169 => 
            array (
                'id' => 171,
                'sifra' => '235',
                'naziv' => 'Stara Pazova',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '80420',
            ),
            170 => 
            array (
                'id' => 172,
                'sifra' => '18',
                'naziv' => 'Stari grad',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70246',
            ),
            171 => 
            array (
                'id' => 173,
                'sifra' => '123',
                'naziv' => 'Stragari',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '',
            ),
            172 => 
            array (
                'id' => 174,
                'sifra' => '236',
                'naziv' => 'Subotica',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '80438',
            ),
            173 => 
            array (
                'id' => 175,
                'sifra' => '319',
                'naziv' => 'Suva Reka',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '90280',
            ),
            174 => 
            array (
                'id' => 176,
                'sifra' => '95',
                'naziv' => 'Surdulica',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '71137',
            ),
            175 => 
            array (
                'id' => 177,
                'sifra' => '124',
                'naziv' => 'Surčin',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '71293',
            ),
            176 => 
            array (
                'id' => 178,
                'sifra' => '238',
                'naziv' => 'Temerin',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '80446',
            ),
            177 => 
            array (
                'id' => 179,
                'sifra' => '239',
                'naziv' => 'Titel',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '80454',
            ),
            178 => 
            array (
                'id' => 180,
                'sifra' => '101',
                'naziv' => 'Topola',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '71153',
            ),
            179 => 
            array (
                'id' => 181,
                'sifra' => '102',
                'naziv' => 'Trgovište',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '71161',
            ),
            180 => 
            array (
                'id' => 182,
                'sifra' => '103',
                'naziv' => 'Trstenik',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '71170',
            ),
            181 => 
            array (
                'id' => 183,
                'sifra' => '104',
                'naziv' => 'Tutin',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '71188',
            ),
            182 => 
            array (
                'id' => 184,
                'sifra' => '32',
                'naziv' => 'Ćićevac',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '71196',
            ),
            183 => 
            array (
                'id' => 185,
                'sifra' => '33',
                'naziv' => 'Ćuprija',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '71200',
            ),
            184 => 
            array (
                'id' => 186,
                'sifra' => '105',
                'naziv' => 'Ub',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '71218',
            ),
            185 => 
            array (
                'id' => 187,
                'sifra' => '100',
                'naziv' => 'Užice',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '71145',
            ),
            186 => 
            array (
                'id' => 188,
                'sifra' => '320',
                'naziv' => 'Uroševac',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '90301',
            ),
            187 => 
            array (
                'id' => 189,
                'sifra' => '126',
                'naziv' => 'Crveni krst',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '',
            ),
            188 => 
            array (
                'id' => 190,
                'sifra' => '31',
                'naziv' => 'Crna Trava',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '71226',
            ),
            189 => 
            array (
                'id' => 191,
                'sifra' => '35',
                'naziv' => 'Čajetina',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '71234',
            ),
            190 => 
            array (
                'id' => 192,
                'sifra' => '34',
                'naziv' => 'Čačak',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '71242',
            ),
            191 => 
            array (
                'id' => 193,
                'sifra' => '211',
                'naziv' => 'Čoka',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '80489',
            ),
            192 => 
            array (
                'id' => 194,
                'sifra' => '11',
                'naziv' => 'Čukarica',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '70254',
            ),
            193 => 
            array (
                'id' => 195,
                'sifra' => '99',
                'naziv' => 'Šabac',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '71269',
            ),
            194 => 
            array (
                'id' => 196,
                'sifra' => '237',
                'naziv' => 'Šid',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '80497',
            ),
            195 => 
            array (
                'id' => 197,
                'sifra' => '325',
                'naziv' => 'Štimlje',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '90310',
            ),
            196 => 
            array (
                'id' => 198,
                'sifra' => '326',
                'naziv' => 'Štrpce',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '90328',
            ),
            197 => array(
                'id' => 199,
                'sifra' => '17620541',
                'naziv' => 'Niš',
                'created_at' => NULL,
                'updated_at' => NULL,
                'mat_br' => '8017620541012',
            )
        ));
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
