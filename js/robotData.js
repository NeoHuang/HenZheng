var robots = [
    {
        brand: "ABB",
        model: "IRB120",
        application: ["装配", "上下料", "物料搬运", "包装", "挤胶"],
        load: 3,
        reach: 0.58,
        protection: ["IP30", "IPA认证洁净室5级"],
        install: ["落地", "挂壁", "倒置", "任意倾角"],
        precision: 0.01
    },
    {
        brand: "ABB",
        model: "IRB120T",
        application: ["装配", "上下料", "物料搬运", "包装", "挤胶"],
        load: 3,
        reach: 0.58,
        protection: ["IP30", "IPA认证洁净室5级"],
        install: ["落地", "挂壁", "倒置", "任意倾角"],
        precision: 0.01
    },
    {
        brand: "ABB",
        model: "IRB120-7/0.7",
        application: ["上下料", "物料搬运"],
        load: 7,
        reach: 0.7,
        protection: ["IP40", "IP67"],
        install: ["任意倾角"],
        precision: 0.02
    },
    {
        brand: "ABB",
        model: "IRB120-9/0.9",
        application: ["上下料", "物料搬运"],
        load: 9,
        reach: 0.9,
        protection: ["IP40", "IP67"],
        install: ["任意倾角"],
        precision: 0.025
    },
    {
        brand: "ABB",
        model: "IRB140",
        application: ["弧焊", "装配", "清洗", "喷淋", "去毛刺", "上下料", "物料搬运", "包装"],
        load: 6,
        reach: 0.81,
        protection: ["IP67", "IPA认证洁净室6级", "铸造专家II代", "蒸汽清洗"],
        install: ["落地", "挂壁", "倒置", "任意倾角"],
        precision: 0.03
    },
    {
        brand: "ABB",
        model: "IRB140T",
        application: ["弧焊", "装配", "清洗", "喷淋", "去毛刺", "上下料", "物料搬运", "包装"],
        load: 6,
        reach: 0.81,
        protection: ["IP67", "IPA认证洁净室6级", "铸造专家II代", "蒸汽清洗"],
        install: ["落地", "挂壁", "倒置", "任意倾角"],
        precision: 0.03
    },
    {
        brand: "ABB",
        model: "IRB1410",
        application: ["弧焊"],
        load: 5,
        reach: 1.44,
        protection: [],
        install: ["落地"],
        precision: 0.02
    },
    {
        brand: "ABB",
        model: "IRB1520",
        application: ["弧焊"],
        load: 4,
        reach: 1.5,
        protection: ["IP40"],
        install: ["落地", "倒置"],
        precision: 0.05
    },
    {
        brand: "ABB",
        model: "IRB1520ID",
        application: ["弧焊"],
        load: 4,
        reach: 1.5,
        protection: ["IP40"],
        install: ["落地", "倒置"],
        precision: 0.05
    },
    {
        brand: "ABB",
        model: "IRB1600-6/1.45",
        application: ["弧焊", "装配", "清洁", "喷淋", "取件", "上下料", "物料搬运", "包装", "切割"],
        load: 6,
        reach: 1.45,
        protection: ["IP54", "IP67", "铸造专家"],
        install: ["落地", "挂壁", "倒置", "斜置", "支架"],
        precision: 0.02
    },
    {
        brand: "ABB",
        model: "IRB1600-10/1.2",
        application: ["弧焊", "装配", "清洁", "喷淋", "取件", "上下料", "物料搬运", "包装", "切割"],
        load: 10,
        reach: 1.2,
        protection: ["IP54", "IP67", "铸造专家"],
        install: ["落地", "挂壁", "倒置", "斜置", "支架"],
        precision: 0.05
    },
    {
        brand: "ABB",
        model: "IRB1600ID",
        application: ["弧焊"],
        load: 4,
        reach: 1.5,
        protection: ["IP40"],
        install: ["落地", "挂壁", "倒置"],
        precision: 0.02
    },
//    {
//        brand: "ABB",
//        model: "IRB2400-10/16",
//        application: ["研磨", "抛光", "去毛刺", "切割"],
//        load: 12,
//        reach: 1.55,
//        protection: ["IP54", "IP67", "铸造专家"],
//        install: ["落地", "挂壁", "倒置"],
//        precision: 0.05
//    },
    {
        brand: "ABB",
        model: "IRB2600-12/1.65",
        application: ["弧焊", "装配", "上下料", "物料搬运", "切割", "挤胶"],
        load: 12,
        reach: 1.65,
        protection: ["IP67", "铸造专家II代"],
        install: ["落地", "挂壁", "倒置", "斜置"],
        precision: 0.04
    },
    {
        brand: "ABB",
        model: "IRB2600-20/1.65",
        application: ["弧焊", "装配", "上下料", "物料搬运", "切割", "挤胶"],
        load: 20,
        reach: 1.65,
        protection: ["IP67", "铸造专家II代"],
        install: ["落地", "挂壁", "倒置", "斜置"],
        precision: 0.04
    },
    {
        brand: "ABB",
        model: "IRB2600-12/1.85",
        application: ["弧焊", "装配", "上下料", "物料搬运", "切割", "挤胶"],
        load: 12,
        reach: 1.85,
        protection: ["IP67", "铸造专家II代"],
        install: ["落地", "挂壁", "倒置", "斜置"],
        precision: 0.04
    },
    {
        brand: "ABB",
        model: "IRB2600-15/1.85",
        application: ["弧焊", "装配", "上下料", "物料搬运", "挤胶"],
        load: 15,
        reach: 1.85,
        protection: ["IP67(底座，下臂和手腕)", "IP54(4轴)"],
        install: ["落地", "挂壁", "倒置", "斜置"],
        precision: 0.03
    },
    {
        brand: "ABB",
        model: "IRB2600ID-8/2.00",
        application: ["弧焊", "上下料", "物料搬运", "挤胶"],
        load: 8,
        reach: 2.0,
        protection: ["IP67", "铸造专家II代"],
        install: ["落地", "挂壁", "倒置", "斜置"],
        precision: 0.04
    },
    {
        brand: "ABB",
        model: "IRB4400-60",
        application: [ "切割", "挤胶", "密封", "去毛刺", "研磨", "抛光"],
        load: 60,
        reach: 1.96,
        protection: ["IP67", "IP54"],
        install: ["落地"],
        precision: 0.19
    },
    {
        brand: "ABB",
        model: "IRB4400L-10",
        application: ["上下料", "物料搬运", "挤胶", "密封", "去毛刺", "研磨", "抛光", "喷淋"],
        load: 10,
        reach: 2.55,
        protection: ["IP67", "IP54"],
        install: ["落地"],
        precision: 0.05
    },
    {
        brand: "ABB",
        model: "IRB4600-20/2.50",
        application: ["弧焊", "装配", "激光焊接", "测量", "上下料", "物料搬运", "包装", "码垛", "弯板机上下料" ],
        load: 20,
        reach: 2.50,
        protection: ["IP67"],
        install: ["落地", "倒置", "斜置"],
        precision: 0.05
    },
    {
        brand: "ABB",
        model: "IRB4600-40/2.55",
        application: ["取件", "装配", "激光焊接", "测量", "上下料", "物料搬运", "包装", "码垛", "挤胶" ],
        load: 40,
        reach: 2.55,
        protection: ["IP67"],
        install: ["落地", "倒置", "斜置"],
        precision: 0.06
    },
    {
        brand: "ABB",
        model: "IRB4600-45/2.05",
        application: ["取件", "装配", "挤胶", "去毛刺", "测量", "上下料", "物料搬运", "包装", "码垛" ],
        load: 45,
        reach: 2.05,
        protection: ["铸造专家II代", "铸造权威II代"],
        install: ["落地", "倒置", "斜置"],
        precision: 0.05
    },
    {
        brand: "ABB",
        model: "IRB4600-60/2.05",
        application: ["取件", "装配", "挤胶", "去毛刺", "测量", "上下料", "物料搬运", "包装", "码垛" ],
        load: 60,
        reach: 2.05,
        protection: ["铸造专家II代", "铸造权威II代"],
        install: ["落地", "倒置", "斜置"],
        precision: 0.06
    },
    {
        brand: "ABB",
        model: "IRB6620",
        application: ["清洁", "喷淋", "上胶", "密封", "装配", "切割", "去毛刺", "上下料", "物料搬运", "包装", "码垛", "研磨", "抛光", "弯板机上下料", "点焊"],
        load: 150,
        reach: 2.2,
        protection: ["IP54", "IP67", "铸造专家II代"],
        install: ["落地", "倒置", "斜置"],
        precision: 0.03
    },
    
    
];
    