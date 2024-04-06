// const stateChangeHistory = [
//     {
//         "status": "Available",
//         "startTime": 1704699897686,
//         "endTime": 1704702303593
//     },
//     {
//         "status": "On Break",
//         "startTime": 1704702304618,
//         "endTime": 1704702600673
//     },
//     {
//         "status": "Available",
//         "startTime": 1704702602875,
//         "endTime": 1704705913794
//     },
//     {
//         "status": "On Break",
//         "startTime": 1704705902794,
//         "endTime": 1704706201148
//     },
//     {
//         "status": "Uninitialized",
//         "startTime": 1704711554837,
//         "endTime": 1704711559910
//     },
//     {
//         "status": "Available",
//         "startTime": 1704706198910,
//         "endTime": 1704711605368
//     },
//     {
//         "status": "At Lunch",
//         "startTime": 1704711604262,
//         "endTime": 1704713405874
//     },
//     {
//         "status": "Uninitialized",
//         "startTime": 1704714536402,
//         "endTime": 1704714541445
//     },
//     {
//         "status": "Available",
//         "startTime": 1704713406327,
//         "endTime": 1704716698820
//     },
//     {
//         "status": "On Break 2",
//         "startTime": 1704716699062,
//         "endTime": 1704717308655
//     },
//     {
//         "status": "Uninitialized",
//         "startTime": 1704718137677,
//         "endTime": 1704718142740
//     },
//     {
//         "status": "Uninitialized",
//         "startTime": 1704719598302,
//         "endTime": 1704719603346
//     },
//     {
//         "status": "Uninitialized",
//         "startTime": 1704722005824,
//         "endTime": 1704722011908
//     },
//     {
//         "status": "Uninitialized",
//         "startTime": 1704723205323,
//         "endTime": 1704723211408
//     },
//     {
//         "status": "Available",
//         "startTime": 1704717308408,
//         "endTime": 1704723905057
//     },
//     {
//         "status": "Uninitialized",
//         "startTime": 1704724405337,
//         "endTime": 1704724412416
//     },
//     {
//         "status": "On Break 2",
//         "startTime": 1704723907416,
//         "endTime": 1704724507457
//     },
//     {
//         "status": "Uninitialized",
//         "startTime": 1704725606244,
//         "endTime": 1704725613344
//     },
//     {
//         "status": "Uninitialized",
//         "startTime": 1704726806533,
//         "endTime": 1704726811615
//     },
//     {
//         "status": "Available",
//         "startTime": 1704726811615,
//         "endTime": 1704726979966
//     },
//     {
//         "status": "Unknown",
//         "startTime": 1704726979966,
//         "endTime": 1704728012155
//     },
//     {
//         "status": "Available",
//         "startTime": 1704726811615,
//         "endTime": 1704728172834
//     },
//     {
//         "status": "Unknown",
//         "startTime": 1704728172834,
//         "endTime": 1704786947011
//     },
//     {
//         "status": "Offline",
//         "startTime": 1704786941991,
//         "endTime": 1704786947011
//     },
//     {
//         "status": "Available",
//         "startTime": 1704786945080,
//         "endTime": 1704788706134
//     },
//     {
//         "status": "On Break",
//         "startTime": 1704788706134,
//         "endTime": 1704789003939
//     },
//     {
//         "status": "Uninitialized",
//         "startTime": 1704789346951,
//         "endTime": 1704789352028
//     },
//     {
//         "status": "Available",
//         "startTime": 1704789003953,
//         "endTime": 1704792303824
//     },
//     {
//         "status": "On Break",
//         "startTime": 1704792303824,
//         "endTime": 1704792598100
//     },
//     {
//         "status": "Uninitialized",
//         "startTime": 1704792951755,
//         "endTime": 1704792956806
//     },
//     {
//         "status": "Available",
//         "startTime": 1704792598075,
//         "endTime": 1704798004090
//     },
//     {
//         "status": "At Lunch",
//         "startTime": 1704798004928,
//         "endTime": 1704799807077
//     },
//     {
//         "status": "Uninitialized",
//         "startTime": 1704800159676,
//         "endTime": 1704800167807
//     },
//     {
//         "status": "Available",
//         "startTime": 1704799808610,
//         "endTime": 1704803101026
//     },
//     {
//         "status": "On Break 2",
//         "startTime": 1704803101026,
//         "endTime": 1704803702448
//     },
//     {
//         "status": "Uninitialized",
//         "startTime": 1704806163455,
//         "endTime": 1704806168539
//     },
//     {
//         "status": "Uninitialized",
//         "startTime": 1704807365428,
//         "endTime": 1704807371510
//     },
//     {
//         "status": "Available",
//         "startTime": 1704803701591,
//         "endTime": 1704810306364
//     },
//     {
//         "status": "On Break 2",
//         "startTime": 1704810306364,
//         "endTime": 1704810898347
//     },
//     {
//         "status": "Uninitialized",
//         "startTime": 1704812172470,
//         "endTime": 1704812177547
//     },
//     {
//         "status": "Available",
//         "startTime": 1704810899542,
//         "endTime": 1704814086210
//     },
//     {
//         "status": "Offline",
//         "startTime": 1704814086210,
//         "endTime": 1704814206723
//     },
//     {
//         "status": "Unknown",
//         "startTime": 1704814206723,
//         "endTime": 1704871952220
//     },
//     {
//         "status": "Offline",
//         "startTime": 1704871947217,
//         "endTime": 1704871952220
//     },
//     {
//         "status": "In A Meeting",
//         "startTime": 1704871952220,
//         "endTime": 1704872707130
//     },
//     {
//         "status": "Available",
//         "startTime": 1704872708002,
//         "endTime": 1704875104458
//     },
//     {
//         "status": "On Break",
//         "startTime": 1704875104458,
//         "endTime": 1704875401263
//     },
//     {
//         "status": "Uninitialized",
//         "startTime": 1704877968550,
//         "endTime": 1704877974713
//     },
//     {
//         "status": "Available",
//         "startTime": 1704875400828,
//         "endTime": 1704878696744
//     },
//     {
//         "status": "On Break",
//         "startTime": 1704878696744,
//         "endTime": 1704879002412
//     },
//     {
//         "status": "Available",
//         "startTime": 1704879004043,
//         "endTime": 1704884400677
//     },
//     {
//         "status": "At Lunch",
//         "startTime": 1704884399394,
//         "endTime": 1704886204982
//     },
//     {
//         "status": "Available",
//         "startTime": 1704886205633,
//         "endTime": 1704889499163
//     },
//     {
//         "status": "On Break 2",
//         "startTime": 1704889499163,
//         "endTime": 1704890097590
//     },
//     {
//         "status": "Available",
//         "startTime": 1704890097590,
//         "endTime": 1704891498197
//     },
//     {
//         "status": "Unknown",
//         "startTime": 1704891498197,
//         "endTime": 1704891896670
//     },
//     {
//         "status": "Available",
//         "startTime": 1704890097590,
//         "endTime": 1704894718039
//     },
//     {
//         "status": "Unknown",
//         "startTime": 1704894718039,
//         "endTime": 1704894846605
//     },
//     {
//         "status": "Available",
//         "startTime": 1704890097054,
//         "endTime": 1704896701557
//     },
//     {
//         "status": "On Break 2",
//         "startTime": 1704896704080,
//         "endTime": 1704897305711
//     },
//     {
//         "status": "Uninitialized",
//         "startTime": 1704899651886,
//         "endTime": 1704899656952
//     },
//     {
//         "status": "Available",
//         "startTime": 1704897305952,
//         "endTime": 1704900476116
//     }
// ]

const stateChangeHistory = [
    {
        "status": "Available",
        "startTime": 1704699897686,
        "endTime": 1704702303593
    },
    {
        "status": "On Break",
        "startTime": 1704702304618,
        "endTime": 1704702600673
    },
    {
        "status": "Available",
        "startTime": 1704702602875,
        "endTime": 1704705913794
    },
    {
        "status": "On Break",
        "startTime": 1704705902794,
        "endTime": 1704706201148
    },
    {
        "status": "Uninitialized",
        "startTime": 1704711554837,
        "endTime": 1704711559910
    },
    {
        "status": "Available",
        "startTime": 1704706198910,
        "endTime": 1704711605368
    },
    {
        "status": "At Lunch",
        "startTime": 1704711604262,
        "endTime": 1704713405874
    },
    {
        "status": "Uninitialized",
        "startTime": 1704714536402,
        "endTime": 1704714541445
    },
    {
        "status": "Available",
        "startTime": 1704713406327,
        "endTime": 1704716698820
    },
    {
        "status": "On Break 2",
        "startTime": 1704716699062,
        "endTime": 1704717308655
    },
    {
        "status": "Uninitialized",
        "startTime": 1704718137677,
        "endTime": 1704718142740
    },
    {
        "status": "Uninitialized",
        "startTime": 1704719598302,
        "endTime": 1704719603346
    },
    {
        "status": "Uninitialized",
        "startTime": 1704722005824,
        "endTime": 1704722011908
    },
    {
        "status": "Uninitialized",
        "startTime": 1704723205323,
        "endTime": 1704723211408
    },
    {
        "status": "Available",
        "startTime": 1704717308408,
        "endTime": 1704723905057
    },
    {
        "status": "Uninitialized",
        "startTime": 1704724405337,
        "endTime": 1704724412416
    },
    {
        "status": "On Break 2",
        "startTime": 1704723907416,
        "endTime": 1704724507457
    },
    {
        "status": "Uninitialized",
        "startTime": 1704725606244,
        "endTime": 1704725613344
    },
    {
        "status": "Uninitialized",
        "startTime": 1704726806533,
        "endTime": 1704726811615
    },
    {
        "status": "Available",
        "startTime": 1704726811615,
        "endTime": 1704726979966
    },
    {
        "status": "Unknown",
        "startTime": 1704726979966,
        "endTime": 1704728012155
    },
    {
        "status": "Available",
        "startTime": 1704726811615,
        "endTime": 1704728172834
    },
    {
        "status": "Unknown",
        "startTime": 1704728172834,
        "endTime": 1704786947011
    },
    {
        "status": "Offline",
        "startTime": 1704786941991,
        "endTime": 1704786947011
    },
    {
        "status": "Available",
        "startTime": 1704786945080,
        "endTime": 1704788706134
    },
    {
        "status": "On Break",
        "startTime": 1704788706134,
        "endTime": 1704789003939
    },
    {
        "status": "Uninitialized",
        "startTime": 1704789346951,
        "endTime": 1704789352028
    },
    {
        "status": "Available",
        "startTime": 1704789003953,
        "endTime": 1704792303824
    },
    {
        "status": "On Break",
        "startTime": 1704792303824,
        "endTime": 1704792598100
    },
    {
        "status": "Uninitialized",
        "startTime": 1704792951755,
        "endTime": 1704792956806
    },
    {
        "status": "Available",
        "startTime": 1704792598075,
        "endTime": 1704798004090
    },
    {
        "status": "At Lunch",
        "startTime": 1704798004928,
        "endTime": 1704799807077
    },
    {
        "status": "Uninitialized",
        "startTime": 1704800159676,
        "endTime": 1704800167807
    },
    {
        "status": "Available",
        "startTime": 1704799808610,
        "endTime": 1704803101026
    },
    {
        "status": "On Break 2",
        "startTime": 1704803101026,
        "endTime": 1704803702448
    },
    {
        "status": "Uninitialized",
        "startTime": 1704806163455,
        "endTime": 1704806168539
    },
    {
        "status": "Uninitialized",
        "startTime": 1704807365428,
        "endTime": 1704807371510
    },
    {
        "status": "Available",
        "startTime": 1704803701591,
        "endTime": 1704810306364
    },
    {
        "status": "On Break 2",
        "startTime": 1704810306364,
        "endTime": 1704810898347
    },
    {
        "status": "Uninitialized",
        "startTime": 1704812172470,
        "endTime": 1704812177547
    },
    {
        "status": "Available",
        "startTime": 1704810899542,
        "endTime": 1704814086210
    },
    {
        "status": "Offline",
        "startTime": 1704814086210,
        "endTime": 1704814206723
    },
    {
        "status": "Unknown",
        "startTime": 1704814206723,
        "endTime": 1704871952220
    },
    {
        "status": "Offline",
        "startTime": 1704871947217,
        "endTime": 1704871952220
    },
    {
        "status": "In A Meeting",
        "startTime": 1704871952220,
        "endTime": 1704872707130
    },
    {
        "status": "Available",
        "startTime": 1704872708002,
        "endTime": 1704875104458
    },
    {
        "status": "On Break",
        "startTime": 1704875104458,
        "endTime": 1704875401263
    },
    {
        "status": "Uninitialized",
        "startTime": 1704877968550,
        "endTime": 1704877974713
    },
    {
        "status": "Available",
        "startTime": 1704875400828,
        "endTime": 1704878696744
    },
    {
        "status": "On Break",
        "startTime": 1704878696744,
        "endTime": 1704879002412
    },
    {
        "status": "Available",
        "startTime": 1704879004043,
        "endTime": 1704884400677
    },
    {
        "status": "At Lunch",
        "startTime": 1704884399394,
        "endTime": 1704886204982
    },
    {
        "status": "Available",
        "startTime": 1704886205633,
        "endTime": 1704889499163
    },
    {
        "status": "On Break 2",
        "startTime": 1704889499163,
        "endTime": 1704890097590
    },
    {
        "status": "Available",
        "startTime": 1704890097590,
        "endTime": 1704891498197
    },
    {
        "status": "Unknown",
        "startTime": 1704891498197,
        "endTime": 1704891896670
    },
    {
        "status": "Available",
        "startTime": 1704890097590,
        "endTime": 1704894718039
    },
    {
        "status": "Unknown",
        "startTime": 1704894718039,
        "endTime": 1704894846605
    },
    {
        "status": "Available",
        "startTime": 1704890097054,
        "endTime": 1704896701557
    },
    {
        "status": "On Break 2",
        "startTime": 1704896704080,
        "endTime": 1704897305711
    },
    {
        "status": "Uninitialized",
        "startTime": 1704899651886,
        "endTime": 1704899656952
    },
    {
        "status": "Available",
        "startTime": 1704897305952,
        "endTime": 1704900476116
    },
    {
        "status": "Uninitialized",
        "startTime": 1704904453327,
        "endTime": 1704904458368
    },
    {
        "status": "Uninitialized",
        "startTime": 1704905653293,
        "endTime": 1704905658347
    },
    {
        "status": "Offline",
        "startTime": 1704905658347,
        "endTime": 1704906479364
    },
    {
        "status": "Unknown",
        "startTime": 1704906479364,
        "endTime": 1704957713840
    },
    {
        "status": "Uninitialized",
        "startTime": 1704957708833,
        "endTime": 1704957713840
    },
    {
        "status": "Offline",
        "startTime": 1704957713840,
        "endTime": 1704957983509
    },
    {
        "status": "Unknown",
        "startTime": 1704957983509,
        "endTime": 1704958166684
    },
    {
        "status": "Offline",
        "startTime": 1704900475880,
        "endTime": 1704958202378
    },
    {
        "status": "In A Meeting",
        "startTime": 1704958202378,
        "endTime": 1704958306469
    },
    {
        "status": "Unknown",
        "startTime": 1704958306469,
        "endTime": 1704958528262
    },
    {
        "status": "In A Meeting",
        "startTime": 1704958199683,
        "endTime": 1704959103145
    },
    {
        "status": "Available",
        "startTime": 1704959101543,
        "endTime": 1704961507668
    },
    {
        "status": "On Break",
        "startTime": 1704961507668,
        "endTime": 1704961800597
    },
    {
        "status": "Available",
        "startTime": 1704961800597,
        "endTime": 1704963325047
    },
    {
        "status": "Unknown",
        "startTime": 1704963325047,
        "endTime": 1704963716578
    },
    {
        "status": "Uninitialized",
        "startTime": 1704963726639,
        "endTime": 1704963731696
    },
    {
        "status": "Available",
        "startTime": 1704961802735,
        "endTime": 1704965108643
    },
    {
        "status": "On Break",
        "startTime": 1704965108643,
        "endTime": 1704965404103
    },
    {
        "status": "Available",
        "startTime": 1704965404627,
        "endTime": 1704970806777
    },
    {
        "status": "At Lunch",
        "startTime": 1704970807147,
        "endTime": 1704972608135
    },
    {
        "status": "Uninitialized",
        "startTime": 1704973321891,
        "endTime": 1704973326953
    },
    {
        "status": "Available",
        "startTime": 1704972605686,
        "endTime": 1704975906298
    },
    {
        "status": "On Break 2",
        "startTime": 1704975906298,
        "endTime": 1704976497136
    },
    {
        "status": "Available",
        "startTime": 1704976498080,
        "endTime": 1704983109428
    },
    {
        "status": "On Break 2",
        "startTime": 1704983103470,
        "endTime": 1704983704364
    },
    {
        "status": "Available",
        "startTime": 1704983704804,
        "endTime": 1704986885948
    },
    {
        "status": "Offline",
        "startTime": 1704986885948,
        "endTime": 1704987286351
    },
    {
        "status": "Unknown",
        "startTime": 1704987286351,
        "endTime": 1705044907547
    },
    {
        "status": "Offline",
        "startTime": 1705044919907,
        "endTime": 1705044924922
    },
    {
        "status": "In A Meeting",
        "startTime": 1705044924922,
        "endTime": 1705045500311
    },
    {
        "status": "Uninitialized",
        "startTime": 1705046126132,
        "endTime": 1705046131191
    },
    {
        "status": "Available",
        "startTime": 1705045499750,
        "endTime": 1705047907019
    },
    {
        "status": "On Break",
        "startTime": 1705047908105,
        "endTime": 1705048203474
    },
    {
        "status": "Available",
        "startTime": 1705048201732,
        "endTime": 1705051505583
    },
    {
        "status": "On Break",
        "startTime": 1705051505583,
        "endTime": 1705051802559
    },
    {
        "status": "Available",
        "startTime": 1705051804128,
        "endTime": 1705057197995
    },
    {
        "status": "At Lunch",
        "startTime": 1705057197705,
        "endTime": 1705058998742
    },
    {
        "status": "Available",
        "startTime": 1705058998871,
        "endTime": 1705062299430
    },
    {
        "status": "On Break 2",
        "startTime": 1705062300483,
        "endTime": 1705062910330
    },
    {
        "status": "Available",
        "startTime": 1705062909890,
        "endTime": 1705069502550
    },
    {
        "status": "On Break 2",
        "startTime": 1705069502550,
        "endTime": 1705070104785
    },
    {
        "status": "Available",
        "startTime": 1705070104785,
        "endTime": 1705070141050
    },
    {
        "status": "Unknown",
        "startTime": 1705070141050,
        "endTime": 1705303905132
    },
    {
        "status": "Available",
        "startTime": 1705070105132,
        "endTime": 1705303910143
    },
    {
        "status": "In A Meeting",
        "startTime": 1705303910143,
        "endTime": 1705304697918
    },
    {
        "status": "Available",
        "startTime": 1705304697701,
        "endTime": 1705307105578
    },
    {
        "status": "On Break",
        "startTime": 1705307105578,
        "endTime": 1705307403435
    },
    {
        "status": "Uninitialized",
        "startTime": 1705308720887,
        "endTime": 1705308727073
    },
    {
        "status": "Uninitialized",
        "startTime": 1705309929275,
        "endTime": 1705309935418
    },
    {
        "status": "Available",
        "startTime": 1705309935418,
        "endTime": 1705310564507
    },
    {
        "status": "Unknown",
        "startTime": 1705310564507,
        "endTime": 1705312787557
    },
    {
        "status": "Available",
        "startTime": 1705307404475,
        "endTime": 1705312825846
    },
    {
        "status": "Uninitialized",
        "startTime": 1705312846349,
        "endTime": 1705312852418
    },
    {
        "status": "Available",
        "startTime": 1705307404648,
        "endTime": 1705316404083
    },
    {
        "status": "At Lunch",
        "startTime": 1705316402532,
        "endTime": 1705318206290
    },
    {
        "status": "Available",
        "startTime": 1705318204686,
        "endTime": 1705321496734
    },
    {
        "status": "On Break 2",
        "startTime": 1705321496734,
        "endTime": 1705322107269
    },
    {
        "status": "Uninitialized",
        "startTime": 1705328464941,
        "endTime": 1705328472039
    },
    {
        "status": "Available",
        "startTime": 1705322109039,
        "endTime": 1705328706307
    },
    {
        "status": "On Break 2",
        "startTime": 1705328706307,
        "endTime": 1705329301722
    },
    {
        "status": "Uninitialized",
        "startTime": 1705329668361,
        "endTime": 1705329673416
    },
    {
        "status": "Available",
        "startTime": 1705329673416,
        "endTime": 1705330855874
    },
    {
        "status": "Unknown",
        "startTime": 1705330855874,
        "endTime": 1705331313191
    },
    {
        "status": "Available",
        "startTime": 1705329303191,
        "endTime": 1705332484816
    },
    {
        "status": "Offline",
        "startTime": 1705332484816,
        "endTime": 1705332982112
    },
    {
        "status": "Unknown",
        "startTime": 1705332982112,
        "endTime": 1705390216819
    },
    {
        "status": "Offline",
        "startTime": 1705390211801,
        "endTime": 1705390216819
    },
    {
        "status": "In A Meeting",
        "startTime": 1705390216819,
        "endTime": 1705391107059
    },
    {
        "status": "Available",
        "startTime": 1705391107059,
        "endTime": 1705391178415
    },
    {
        "status": "Unknown",
        "startTime": 1705391178415,
        "endTime": 1705393330642
    },
    {
        "status": "Available",
        "startTime": 1705391107059,
        "endTime": 1705393330642
    },
    {
        "status": "Unknown",
        "startTime": 1705393330642,
        "endTime": 1705393633367
    },
    {
        "status": "Available",
        "startTime": 1705393628347,
        "endTime": 1705393633367
    },
    {
        "status": "On Break",
        "startTime": 1705393633367,
        "endTime": 1705393806847
    },
    {
        "status": "Available",
        "startTime": 1705393806847,
        "endTime": 1705395336865
    },
    {
        "status": "Unknown",
        "startTime": 1705395336865,
        "endTime": 1705396449821
    },
    {
        "status": "Uninitialized",
        "startTime": 1705396444814,
        "endTime": 1705396449821
    },
    {
        "status": "Available",
        "startTime": 1705393805821,
        "endTime": 1705397102093
    },
    {
        "status": "On Break",
        "startTime": 1705397102093,
        "endTime": 1705397399179
    },
    {
        "status": "Uninitialized",
        "startTime": 1705400050003,
        "endTime": 1705400056083
    },
    {
        "status": "Available",
        "startTime": 1705397397365,
        "endTime": 1705402809130
    },
    {
        "status": "Uninitialized",
        "startTime": 1705403654199,
        "endTime": 1705403660266
    },
    {
        "status": "At Lunch",
        "startTime": 1705402809266,
        "endTime": 1705404606611
    },
    {
        "status": "Uninitialized",
        "startTime": 1705404857789,
        "endTime": 1705404862853
    },
    {
        "status": "Uninitialized",
        "startTime": 1705407258460,
        "endTime": 1705407264535
    },
    {
        "status": "Available",
        "startTime": 1705404606535,
        "endTime": 1705407900747
    },
    {
        "status": "On Break 2",
        "startTime": 1705407900921,
        "endTime": 1705408503128
    },
    {
        "status": "Uninitialized",
        "startTime": 1705409667611,
        "endTime": 1705409672633
    }
]
const checkLogs = [
    // Cada 2 segundos aprox, se loguea que se ha vigilado. Así sabemos cuándo el usuario
    // ha estado realmente conectado y los datos son fiables.
    1703838300000,
    1703835120000,
    1703835240000,
    1703835360000,
    1703835480000,
    1703835600000,
    1703835720000,
    1703835840000,
    // ...
]

// Divide todo el período en trozos de 5 minutos, y haz un array

// * "Available" / Break" / "Lunch" / "Offline": When there has been only 1 status
// * "MIXED": When there has been more than 1 status
// * "ABSENT": When there has been no logs



// In Javascript, the user sends a timestamp to the server every 2 seconds approximately.This means the user has been connected in that timestamp.
// Therefore, we get an array like this:

const attendanceLogs = [
    1703838300000,
    1703835120000,
    1703835240000,
    1703835360000,
    1703835480000,
    1703835600000,
    1703835720000,
    1703835840000,
    // ...
]

// Now, we need to get the attendance changes from this array. There are two statuses: "Present", when there have been logs, and "Absent", when no logs are detected during a significant period of time.

const attendanceHistory = [
    {
        status: "Present",
        startTime: 1703835000000,
        endTime: 1703838300000,
    },
    {
        status: "Absent",
        startTime: 1703838300000,
        endTime: 1703838600000,
    },
    {
        status: "Present",
        startTime: 1703838600000,
        endTime: 1703841900000,
    },
    // ...
]

// What can be the approach to this?