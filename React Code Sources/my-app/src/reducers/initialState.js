const initialState = {
    collapse: false,
    countries:[],
    steps:{
        step1: {
            step: 1,
            header:{
                header: 'Сontact details',
                textBox: 'Welcome to United Properties, we are glad to see you! Let’s get started by letting us know a little bit about you'
            },
            sideBar:{
                textContext: "We care about your time, that's why we created a 3-stage onboarding that will not take more than 5 minutes to complete",
                userName: 'William Mac',
                userPosition: 'CO-FOUNDER, INVESTOR'
            }
        },
        step2: {
            step: 2,
            header:{
                header: 'Investment plans',
                textBox: 'Let us know about your investment plans. This will help us get you to the right expert who will help you further'
            },
            sideBar:{
                textContext: "Save from thousands to millions on your deal. Secure the best possible. And get independent, unbiased advice for free",
                userName: 'Jodie Sears',
                userPosition: 'UNITEDPROPERTIES’ AGENT'
            }
        },
        step3: {
            step: 3,
            header:{
                header: 'Investment preferences',
                textBox: 'This will help us figure out what your investment options are so that we can show you only possibly intresting for you deals'
            },
            sideBar:{
                textContext: "United Properties is about fast & easy searching, buying, selling and investing ever — online, with an expert by our side",
                userName: 'Ollie Mcmahon',
                userPosition: 'MANAGING DIRECTOR'
            }
        }
    },
    step1: true,
    step2: false,
    step3: false,
    userInformations:{
        country:'',
        fullname:'',
        number:'',
        email:'',
        from_invest_value:'',
        to_invest_value:'',
        interest1:'',
        interest2:'',
        interest3:'',
        interest4:'',
        interest5:'',
        interest6:'',
        interest7:'',
        interest8:''
    }
}
export default initialState;