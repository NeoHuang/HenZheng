var robotsData = [
    {
        image: '/abb/IRB120.jpg',
        brand: "ABB",
        model: "IRB120-3/0.6",
        application: ["装配", "上下料", "物料搬运", "包装", "涂胶"],
        load: 3,
        reach: 0.58,
        protection: ["IP30", "IPA认证洁净室5级" ],
        install: ["落地", "挂壁", "倒置","任意倾角"],
        precision: 0.01
    },

    {
        image: '/abb/IRB140.jpg',
        brand: "ABB",
        model: "IRB140-6/0.81",
        application: ["弧焊", "装配", "喷淋", "上下料", "物料搬运", "包装"],
        load: 6,
        reach: 0.81,
        protection: ["IP67", "通过IPA洁净室6级认证", "铸造专家II代","蒸汽清洗"],
        install: ["落地" ,"挂壁","任意倾角", "倒置"],
        precision: 0.03
    },

    {
        image: '/abb/IRB1200.jpg',
        brand: "ABB",
        model: "IRB1200-7/0.7",
        application: ["上下料", "物料搬运"],
        load: 7,
        reach: 0.7,
        protection: ["IP67", "IP40"],
        install: ["任意角度"],
        precision: 0.02
    },
    {
        image: '/abb/IRB1200.jpg',
        brand: "ABB",
        model: "IRB1200-5/0.9",
        application: ["上下料", "物料搬运"],
        load: 5,
        reach: 0.9,
        protection: ["IP67", "IP40"],
        install: ["任意角度"],
        precision: 0.025
    },
    {
        image: '/abb/IRB1410.jpg',
        brand: "ABB",
        model: "IRB1410-5/1.44",
        application: ["弧焊"],
        load: 5,
        reach: 1.44,
        protection: [],
        install: ["落地" ],
        precision: 0.02
    },

    {
        image: '/abb/IRB1520.jpg',
        brand: "ABB",
        model: "IRB1520-4/1.50",
        application: ["弧焊"],
        load: 4,
        reach: 1.50,
        protection: ["IP40"],
        install: ["落地","倒置" ],
        precision: 0.05
    },

    {
        image: '/abb/IRB1600.jpg',
        brand: "ABB",
        model: "IRB1600-6/1.2",
        application: ["弧焊","装配","喷淋","上下料","物料搬运","包装"],
        load: 6,
        reach: 1.2,
        protection: ["IP54","IP67", "铸造专家||代"],
        install: ["落地","挂壁","斜置","倒置","支架" ],
        precision: 0.02
    },


    {
        image: '/abb/IRB1600.jpg',
        brand: "ABB",
        model: "IRB1600-10/1.2",
        application: ["弧焊","装配","喷淋","上下料","物料搬运","包装"],
        load: 10,
        reach: 1.2,
        protection: ["IP54","IP67", "铸造专家||代"],
        install: ["落地","挂壁","斜置","倒置","支架" ],
        precision: 0.02
    },

    {
        image: '/abb/IRB1600.jpg',
        brand: "ABB",
        model: "IRB1600-10/1.45",
        application: ["弧焊","装配","喷淋","机加工", "上下料","物料搬运","包装"],
        load: 10,
        reach: 1.45,
        protection: ["IP54","IP67", "铸造专家||代"],
        install: ["落地","挂壁","斜置","倒置","支架" ],
        precision: 0.02
    },
    {
        image: '/abb/IRB1600.jpg',
        brand: "ABB",
        model: "IRB1600-6/1.45",
        application: ["弧焊","装配","喷淋","机加工","上下料","物料搬运","包装"],
        load: 6,
        reach: 1.45,
        protection: ["IP54","IP67", "铸造专家||代"],
        install: ["落地","挂壁","斜置","倒置","支架" ],
        precision: 0.05
    },

    {
        image: '/abb/IRB1600ID.jpg',
        brand: "ABB",
        model: "IRB1600ID-4/1.5",
        application: ["弧焊"],
        load: 4,
        reach: 1.5,
        protection: ["IP40"],
        install: ["落地","斜置","倒置" ],
        precision: 0.02
    },

    {
        image: '/abb/IRB2400.jpg',
        brand: "ABB",
        model: "IRB2400-12/1.55",
        application: ["机加工","打磨","抛光"],
        load: 12,
        reach: 1.55,
        protection: ["IP54","IP67","铸造专家"],
        install: ["落地","倒置" ],
        precision: 0.03
    },

    {
        image: '/abb/IRB2400.jpg',
        brand: "ABB",
        model: "IRB2400-20/1.55",
        application: ["机加工","打磨","抛光"],
        load: 20,
        reach: 1.55,
        protection: ["IP54","IP67","铸造专家"],
        install: ["落地","倒置" ],
        precision: 0.03
    },

    {
        image: '/abb/IRB2600.jpg',
        brand: "ABB",
        model: "IRB2600-12/1.65 ",
        application: ["弧焊","装配","机加工","涂胶","上下料","物料搬运","测量"],
        load: 12,
        reach: 1.65,
        protection: ["IP67","铸造专家||代"],
        install: ["落地","挂壁","斜置","倒置"],
        precision: 0.04
    },
    {
        image: '/abb/IRB2600.jpg',
        brand: "ABB",
        model: "IRB2600-20/1.65 ",
        application: ["孤焊","装配","机加工","涂胶","上下料","物料搬运","测量"],
        load: 20,
        reach: 1.65,
        protection: ["IP67","铸造专家||代"],
        install: ["落地","挂壁","斜置","倒置"],
        precision: 0.04
    },

    {
        image: '/abb/IRB2600.jpg',
        brand: "ABB",
        model: "IRB2600-12/1.85 ",
        application: ["孤焊","装配","机加工","涂胶","上下料","物料搬运","测量"],
        load: 12,
        reach: 1.85,
        protection: ["IP67","铸造专家||代"],
        install: ["落地","挂壁","斜置","倒置"],
        precision: 0.04
    },

    {
        image: '/abb/IRB2600ID.jpg',
        brand: "ABB",
        model: "IRB2600ID-8/2.00 ",
        application: ["孤焊","涂胶","上下料","物料搬运"],
        load: 8,
        reach: 2.00,
        protection: ["IP67","IP54"],
        install: ["落地","挂壁","斜置","倒置"],
        precision: 0.02
    },

    {
        image: '/abb/IRB2600.jpg',
        brand: "ABB",
        model: "IRB2600-15/1.85 ",
        application: ["孤焊","装配","机加工","涂胶","上下料","物料搬运"],
        load: 15,
        reach: 1.85,
        protection: ["IP67","IP54"],
        install: ["落地","挂壁","斜置","倒置"],
        precision: 0.03
    },

    {
        image: '/abb/IRB4400.jpg',
        brand: "ABB",
        model: "IRB4400-60/1.96",
        application: ["机加工",  "涂胶", "密封", "打磨", "抛光"],
        load: 60,
        reach: 1.96,
        protection: ["IP54","IP67", "蒸汽冲洗型"],
        install: ["落地" ],
        precision: 0.19
    },
    {
        image: '/abb/IRB4400.jpg',
        brand: "ABB",
        model: "IRB4400-10/2.55",
        application: ["机加工",  "喷淋", "涂胶", "密封", "打磨", "抛光","上下料","物料搬运"],
        load: 10,
        reach: 2.55,
        protection: ["IP54","IP67", "蒸汽冲洗型"],
        install: ["落地" ],
        precision: 0.05
    },

    {
        image: '/abb/IRB4600.jpg',
        brand: "ABB",
        model: "IRB4600-20/2.50",
        application: ["弧焊", "装配", "涂胶", "激光焊接", "上下料", "物料搬运", "测量", "包装","码垛"],
        load: 20,
        reach: 2.50,
        protection: ["IP67", "铸造专家II代"],
        install: ["落地" ,"斜置", "倒置"],
        precision: 0.05
    },

    {
        image: '/abb/IRB4600.jpg',
        brand: "ABB",
        model: "IRB4600-40/2.55",
        application: ["装配", "涂胶", "激光焊接", "上下料", "物料搬运", "测量", "包装","码垛"],
        load: 40,
        reach: 2.55,
        protection: ["IP67", "铸造专家II代",],
                     install: ["落地" ,"斜置", "倒置"],
        precision: 0.06
    },

    {
        image: '/abb/IRB4600.jpg',
        brand: "ABB",
        model: "IRB4600-45/2.05",
        application: ["装配",  "涂胶", "上下料", "物料搬运", "测量", "包装","码垛"],
        load: 45,
        reach: 2.05,
        protection: ["IP67", "铸造专家||代", "铸造权威||代"],
        install: ["落地" ,"斜置", "倒置"],
        precision: 0.05
    },

    {
        image: '/abb/IRB4600.jpg',
        brand: "ABB",
        model: "IRB4600-60/2.05",
        application: ["装配",  "涂胶", "上下料", "物料搬运", "测量", "包装","码垛"],
        load: 60,
        reach: 2.05,
        protection: ["IP67", "铸造专家||代", "铸造权威||代"],
        install: ["落地" ,"斜置", "倒置"],
        precision: 0.06
    },

    {
        image: '/abb/IRB6620.jpg',
        brand: "ABB",
        model: "IRB6620-150/2.2",
        application: ["喷淋", "涂胶", "密封", "装配", "机加工",  "上下料", "物料搬运", "包装", "码垛", "打磨", "抛光", "点焊"],
        load: 150,
        reach: 2.2,
        protection: ["IP54", "IP67", "铸造专家II代"],
        install: ["落地", "倒置", "斜置"],
        precision: 0.03
    },

    {
        image: '/abb/IRB6620LX.jpg',
        brand: "ABB",
        model: "IRB6620LX",
        application: ["上下料", "物料搬运"],
        load: 150,
        reach: 1.9,
        protection: ["IP54", "IP66", " IP67"],
        install: ["挂壁", "倒置"],
        precision: 0.05
    },
    {
        image: '/abb/IRB6640.jpg',
        brand: "ABB",
        model: "IRB6640-180/2.55",
        application: ["机加工",  "打磨", "抛光", "上下料", "物料搬运", "点焊"],
        load: 180,
        reach: 2.55,
        protection: ["IP67","铸造专家‖代","IPA认证洁净室5级"],
        install: ["落地"],
        precision: 0.07
    },

    {
        image: '/abb/IRB6640.jpg',
        brand: "ABB",
        model: "IRB6640-235/2.55",
        application: ["机加工",  "打磨", "抛光", "上下料", "物料搬运", "点焊"],
        load: 235,
        reach: 2.55,
        protection: ["IP67","洁净室5级","铸造专家‖代","铸造权威‖代"],
        install: ["落地"],
        precision: 0.05
    },

    {
        image: '/abb/IRB6640.jpg',
        brand: "ABB",
        model: "IRB6640-205/2.75",
        application: ["机加工",  "打磨", "抛光", "上下料", "物料搬运", "点焊"],
        load: 205,
        reach: 2.75,
        protection: ["IP67","洁净室5级","铸造专家‖代"],
        install: ["落地"],
        precision: 0.04
    },
    {
        image: '/abb/IRB6640.jpg',
        brand: "ABB",
        model: "IRB6640-185/2.8",
        application: ["机加工",  "打磨", "抛光", "上下料", "物料搬运", "点焊"],
        load: 185,
        reach: 2.8,
        protection: ["IP67","洁净室5级","铸造专家‖代","铸造权威‖代"],
        install: ["落地"],
        precision: 0.05
    },

    {
        image: '/abb/IRB6640.jpg',
        brand: "ABB",
        model: "IRB6640-130/3.2",
        application: ["机加工",  "打磨", "抛光", "上下料", "物料搬运", "点焊"],
        load: 130,
        reach: 3.2,
        protection: ["IP67","洁净室5级","铸造专家‖代"],
        install: ["落地"],
        precision: 0.05
    },

    {
        image: '/abb/IRB6640.jpg',
        brand: "ABB",
        model: "IRB6640ID-200/2.55",
        application: ["机加工",  "打磨", "抛光", "上下料", "物料搬运", "点焊"],
        load: 200,
        reach: 2.55,
        protection: ["IP67"],
        install: ["落地"],
        precision: 0.07
    },

    {
        image: '/abb/IRB6640.jpg',
        brand: "ABB",
        model: "IRB6640-170/2.75",
        application: ["装配","机加工",  "打磨", "抛光", "上下料", "物料搬运", "喷淋"],
        load: 170,
        reach: 2.75,
        protection: ["IP67"],
        install: ["落地"],
        precision: 0.06
    },

    {
        image: '/abb/IRB6650S.jpg',
        brand: "ABB",
        model: "IRB6650S-90/3.9",
        application: ["装配","机加工", "打磨", "抛光", "上下料", "物料搬运", "喷淋"],
        load: 90,
        reach: 3.9,
        protection: ["IP67","铸造专家‖代","高压蒸汽清洗"],
        install: ["支架"],
        precision: 0
    },

    {
        image: '/abb/IRB6650S.jpg',
        brand: "ABB",
        model: "IRB6650S-125/3.5",
        application: ["装配","机加工", "打磨", "抛光", "上下料", "物料搬运", "喷淋"],
        load: 125,
        reach: 3.5,
        protection: ["IP67","铸造专家‖代","高压蒸汽清洗"],
        install: ["支架"],
        precision: 0.13
    },

    {
        image: '/abb/IRB6650S.jpg',
        brand: "ABB",
        model: "IRB6650S-200/3.0",
        application: ["装配","机加工", "打磨", "抛光", "上下料", "物料搬运", "喷淋"],
        load: 200,
        reach: 3.0,
        protection: ["IP67","铸造专家‖代","高压蒸汽清洗"],
        install: ["支架"],
        precision: 0.14
    },

    {
        image: '/abb/IRB6660.jpg',
        brand: "ABB",
        model: "IRB6660-100/3.3",
        application: ["物料搬运","上下料"],
        load: 100,
        reach: 3.3,
        protection: ["IP67"],
        install: ["落地"],
        precision: 0.10
    },

    {
        image: '/abb/IRB6660.jpg',
        brand: "ABB",
        model: "IRB6660-130/3.1",
        application: ["物料搬运","上下料"],
        load: 130,
        reach: 3.1,
        protection: ["IP67"],
        install: ["落地"],
        precision: 0.11
    },

    {
        image: '/abb/IRB6660.jpg',
        brand: "ABB",
        model: "IRB6660-205/1.9",
        application: ["打磨","机加工"],
        load: 205,
        reach: 1.9,
        protection: ["IP67","铸造专家‖代"],
        install: ["落地"],
        precision: 0.07
    },

    {
        image: '/abb/IRB6700.jpg',
        brand: "ABB",
        model: "IRB6700-235/2.65",
        application: ["机加工",  "打磨", "抛光", "上下料", "物料搬运", "点焊"],
        load: 235,
        reach: 2.65,
        protection: ["IP67","铸造专家‖代"],
        install: ["落地"],
        precision: 0.05
    },

    {
        image: '/abb/IRB6700.jpg',
        brand: "ABB",
        model: "IRB6700-205/2.80",
        application: ["机加工",  "打磨", "抛光", "上下料", "物料搬运", "点焊"],
        load: 205,
        reach: 2.80,
        protection: ["IP67","铸造专家‖代"],
        install: ["落地"],
        precision: 0.05
    },

    {
        image: '/abb/IRB6700.jpg',
        brand: "ABB",
        model: "IRB6700-200/2.60",
        application: ["机加工",  "打磨", "抛光", "上下料", "物料搬运", "点焊"],
        load: 200,
        reach: 2.60,
        protection: ["IP67","铸造专家‖代"],
        install: ["落地"],
        precision: 0.05
    },

    {
        image: '/abb/IRB6700.jpg',
        brand: "ABB",
        model: "IRB6700-175/3.05",
        application: ["机加工",  "打磨", "抛光", "上下料", "物料搬运", "点焊"],
        load: 175,
        reach: 3.05,
        protection: ["IP67","铸造专家‖代"],
        install: ["落地"],
        precision: 0.05
    },

    {
        image: '/abb/IRB6700.jpg',
        brand: "ABB",
        model: "IRB6700-155/2.85",
        application: ["机加工",  "打磨", "抛光", "上下料", "物料搬运", "点焊"],
        load: 155,
        reach: 2.85,
        protection: ["IP67","铸造专家‖代"],
        install: ["落地"],
        precision: 0.05
    },

    {
        image: '/abb/IRB6700.jpg',
        brand: "ABB",
        model: "IRB6700-150/3.20",
        application: ["机加工",  "打磨", "抛光", "上下料", "物料搬运", "点焊"],
        load: 150,
        reach: 3.20,
        protection: ["IP67","铸造专家‖代"],
        install: ["落地"],
        precision: 0.06
    },

    {
        image: '/abb/IRB7600.jpg',
        brand: "ABB",
        model: "IRB7600-500/2.55",
        application: ["装配", "机加工","打磨", "抛光","上下料", "物料搬运", "点焊"],
        load: 500,
        reach: 2.55,
        protection: ["IP67","铸造专家‖代"],
        install: ["落地"],
        precision: 0.08
    },

    {
        image: '/abb/IRB7600.jpg',
        brand: "ABB",
        model: "IRB7600-400/2.55",
        application: ["装配", "机加工","打磨", "抛光","上下料", "物料搬运", "点焊"],
        load: 400,
        reach: 2.55,
        protection: ["IP67","铸造专家‖代"],
        install: ["落地"],
        precision: 0.19
    },

    {
        image: '/abb/IRB7600.jpg',
        brand: "ABB",
        model: "IRB7600-340/2.8",
        application: ["装配", "机加工","打磨", "抛光","上下料", "物料搬运", "点焊"],
        load: 340,
        reach: 2.8,
        protection: ["IP67","铸造专家‖代"],
        install: ["落地"],
        precision: 0.27
    },

    {
        image: '/abb/IRB7600.jpg',
        brand: "ABB",
        model: "IRB7600-325/3.1",
        application: ["装配", "机加工","打磨", "抛光","上下料", "物料搬运","点焊"],
        load: 325,
        reach: 3.1,
        protection: ["IP67","铸造专家‖代"],
        install: ["落地"],
        precision: 0.10
    },

    {
        image: '/abb/IRB7600.jpg',
        brand: "ABB",
        model: "IRB7600-150/3.50",
        application: ["装配", "机加工","打磨", "抛光","上下料", "物料搬运"],
        load: 150,
        reach: 3.50,
        protection: ["IP67","铸造专家‖代"],
        install: ["落地"],
        precision: 0.19
    },

    {
        image: '/abb/IRB260.jpg',
        brand: "ABB",
        model: "IRB260",
        application: ["包装"],
        load: 30,
        reach: 1.5,
        protection: ["IP67"],
        install: ["落地"],
        precision: 0.03
    },

    {
        image: '/abb/IRB460.jpg',
        brand: "ABB",
        model: "IRB460",
        application: ["拆垛", "物料搬运","码垛"],
        load: 110,
        reach: 2.4,
        protection: ["IP67"],
        install: ["落地"],
        precision: 0.20
    },

    {
        image: '/abb/IRB660.jpg',
        brand: "ABB",
        model: "IRB660",
        application: ["物料搬运","码垛"],
        load: 180,
        reach: 3.15,
        protection: ["IP67"],
        install: ["落地"],
        precision: 0.05
    },

    {
        image: '/abb/IRB660.jpg',
        brand: "ABB",
        model: "IRB660",
        application: ["物料搬运","码垛"],
        load: 250,
        reach: 3.15,
        protection: ["IP67"],
        install: ["落地"],
        precision: 0.05
    },

    {
        image: '/abb/IRB760.jpg',
        brand: "ABB",
        model: "IRB760",
        application: ["拆垛", "码垛", "物料搬运","码垛"],
        load: 450,
        reach: 3.18,
        protection: ["IP67"],
        install: ["落地"],
        precision: 0.05
    },

    {
        image: '/abb/IRB360.jpg',
        brand: "ABB",
        model: "IRB360-1/800",
        application: ["装配", "物料搬运","包装", "上下料"],
        load: 1,
        reach: 0.8,
        protection: ["IP54","可冲洗"],
        precision: 0.04
    },

    {
        image: '/abb/IRB360.jpg',
        brand: "ABB",
        model: "IRB360-1/1130",
        application: ["装配", "物料搬运","包装", "上下料"],
        load: 1,
        reach: 1.130,
        protection: ["IP54","IP67","IP69K","IPA认证","不锈钢洁净室","可冲洗"],
        precision: 0.09
    },

    {
        image: '/abb/IRB360.jpg',
        brand: "ABB",
        model: "IRB360-3/1130",
        application: ["装配", "物料搬运","包装", "上下料"],
        load: 3,
        reach: 1.130,
        protection: ["IP54","IP67","IP69K","IPA认证","不锈钢洁净室","可冲洗"],
        precision: 0.06
    },

    {
        image: '/abb/IRB360.jpg',
        brand: "ABB",
        model: "IRB360-8/1130",
        application: ["装配", "物料搬运","包装", "上下料"],
        load: 8,
        reach: 1.130,
        protection: ["IP54"],
        precision: 0.03
    },

    {
        image: '/abb/IRB360.jpg',
        brand: "ABB",
        model: "IRB360-1/1600",
        application: ["装配", "物料搬运","包装", "上下料"],
        load: 1,
        reach: 1.600,
        protection: ["IP54","IP67","IP69K","IPA认证","不锈钢洁净室","可冲洗"],
        precision: 0.03
    },

    {
        image: '/abb/IRB360.jpg',
        brand: "ABB",
        model: "IRB360-6/1600",
        application: ["装配", "物料搬运","包装", "上下料"],
        load: 6,
        reach: 1.600,
        protection: ["IP54"],
        precision: 0.03
    },

    {
	image: '/abb/IRB52.jpg',
        brand: "ABB",
        model: "IRB52",
        application: ["喷涂"],
        load: 7,
        reach: 1450,
        protection: ["IP67防爆"],
        install: ["落地","斜置","挂壁","倒置"],
        precision: 0.15
    },

    {
	image: '/abb/IRB580.jpg',
        brand: "ABB",
        model: "IRB58",
        application: ["喷涂"],
        load: 10,
        reach: 1220,
        protection: ["IP67防爆"],
        install: ["落地","倒置"],
        precision: 0.3
    },

    {
	image: '/abb/IRB580.jpg',
        brand: "ABB",
        model: "IRB580",
        application: ["喷涂"],
        load: 10,
        reach: 2600,
        protection: ["IP67防爆"],
        install: ["落地","倒置"],
        precision: 0.3
    },

    {
	image: '/abb/IRB5400.jpg',
        brand: "ABB",
        model: "IRB5400",
        application: ["喷涂"],
        load: 25,
        reach: 3100,
        protection: ["IP67防爆"],
        install: ["落地"],
        precision: 0.15
    },

    {
	image: '/abb/IRB5500.jpg',
        brand: "ABB",
        model: "IRB5500",
        application: ["喷涂"],
        load: 13,
        reach: 5800,
        protection: ["IP67防爆"],
        install: ["挂壁"],
        precision: 0.15
    },

]
