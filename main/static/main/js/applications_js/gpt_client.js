var output = $('.output');
var input = $('textarea.input');
var toOutput;
let flag = false;
let check_root_flag = false;
let SUPER_ROOT_FLAG = false;
let CHANGE_SITE_NAME_FLAG = false;


const heading = document.getElementById('root');
let special_password = '123nikita321'


document.querySelector('textarea').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    console.log('Enter')

    const inputVal = $.trim(input.val());
    console.log(inputVal);
    if (flag === false && check_root_flag === false && CHANGE_SITE_NAME_FLAG === false) {
      if (inputVal == "help") {
        help();
        input.val('');
      } else if (inputVal == "about") {
        aboutMe();
        input.val('');
      } else if (inputVal == "contact") {
        contactMe();
        input.val('');
      } else if (inputVal == "clear") {
        clearConsole();
        input.val('');
      } else if (inputVal.startsWith("say") === true) {
        sayThis(inputVal);
        input.val('');

      } else if (inputVal.startsWith("cow say") === true) {
        cowSayThis(inputVal);
        input.val('');

      } else if (inputVal.startsWith("sudo") === true) {
        sudo(inputVal);
        input.val('');

      } else if (inputVal.startsWith("ls") === true) {
        ls();
        input.val('');

      } else if (inputVal.startsWith("open") === true) {
          open(inputVal);
          input.val('');
      }else if (inputVal.toLowerCase() === "snow"){
          input.val('');

          Output('<span class="green">С новым годом!</span>')
          let_it_snow();
          seperator();

      } else if (inputVal == 'whats that sound' || inputVal == 'what\'s that sound' || inputVal == 'whats that sound?') {
        seperator();
        Output('<span class="blue">' + inputVal + '</span></br><span class="red">Machine Broken!</span></br>');
        seperator();
        input.val('');
      } else if (inputVal === "exit") {
        Output('<span class="blue">Пока! Возвращайся снова!</span>');
        setTimeout(function () {
          window.open('https://codepen.io/MarioDesigns');
        }, 1000);

        } else if (inputVal.toLowerCase() === 'super root') {
        check_roots();
        input.val('');

        } else if (inputVal.toLowerCase() === 'begin attack') {
          if (SUPER_ROOT_FLAG === true) {
              seperator();
              Output('<span style="color: red">Начинаем атаку 😈</span></br>');
              attack();
              input.val('');
              seperator();
          } else {
              Output('<span>command not found</span></br>');
              input.val('');
          }
      } else if (inputVal.toLowerCase().startsWith('change site name')) {
          if (SUPER_ROOT_FLAG === true) {
              input.val('')
              seperator();
              CHANGE_SITE_NAME_FLAG = true;
              Output('<span style="color: red">Напишите новое название для сайта</span></br>');
              seperator();
              heading.textContent = 'Name:'
          } else {
              Output('<span>command not found</span></br>');
              input.val('');
          }


      } else if (inputVal.toLowerCase() === 'delete') {
          if (SUPER_ROOT_FLAG === true) {
              input.val('');
              let i = 10;
              const my_interval = setInterval(function () {
                      if (i >= 0) {
                          Output('<span style="color: red">' + `До удаления ${i--} секунд` + '</span><br/>');
                          seperator();
                      } else {
                          clearInterval(my_interval)
                          del();
                      }
                  },
                  2000,);
          } else {
              Output('<span>command not found</span></br>');
              input.val('');
          }
      } else if (inputVal.toLowerCase() === 'change fonts') {
          if (SUPER_ROOT_FLAG === true) {
              changeFonts();
          }else {
              Output('<span>command not found</span></br>');
              input.val('');
          }
        } else if (inputVal.toLowerCase() === 'exit super root') {
          seperator();
          if (SUPER_ROOT_FLAG === true) {
              SUPER_ROOT_FLAG = false;
              heading.textContent = 'User$';
              input.val('');
              Output('<span>' + 'Вы вышли из режима super root' + '</span><br/>')
          } else {
              Output('<span>' + 'Вы не находитесь в режиме super root' + '</span><br/>')
          }
          seperator();

      } else if (inputVal.toLowerCase() == 'gpt') {
        gpt();
        input.val('');
      } else {
        Output('<span>command not found</span></br>');
        input.val('');
      }
    } else if (flag === true) {

        if (inputVal.toLowerCase() == 'exit gpt') {
            flag = false;
            input.val('');
            getAnswer(inputVal)
        } else {
            input.val('');
            getAnswer(inputVal)
        }
    } else if (check_root_flag === true){

        if (inputVal.toLowerCase() === special_password) {
            SUPER_ROOT_FLAG = true;
            check_root_flag = false;
            input.val('');

            heading.textContent = 'Super$';

            seperator();
            var congrat = [
                'Подключение ROOT прав выполнено успешно!',
                '----------------------------------------',
                'Теперь вам доступны новые функции и возможности',
                '------------------------------------------------']
            for (var i = 0; i < congrat.length; i++) {
                var out = '<span>' + congrat[i] + '</span><br/>'
                Output(out);
            }
            seperator();
        } else {
            if (inputVal === 'exit super root') {
                check_root_flag = false;
                input.val('');
                heading.textContent = 'User$';
                Output('<span>' + 'Вы вышли из режима super root' + '</span><br/>')

            } else {
                input.val('');
                seperator();
                Output('<span>' + 'Неправильный пароль! Попробуйте еще раз' + '</span><br/>')
            }
        }
    } else if (CHANGE_SITE_NAME_FLAG === true) {
        changeName(inputVal);
        input.val('')
    }
  }
});

// functions related to the commands typed
// =======================================

// prints out a seperator
function seperator() {
  Output('<span class="seperator">== == == == == == == == == == == == == == == == == ==</span></br>');
}


//_________________________________________________________________
// ФУНКЦИЯ КОРОВА С ТЕКСТОМ
//_________________________________________________________________
function cowSayThis(data){
  seperator();
  var output = [
    '/---------------------------------------&#92;',
    '|---------------------------------------|',
    '&#92;---------------------------------------/',
    '&nbsp&nbsp&nbsp&nbsp\^__^',
    '&nbsp&nbsp&nbsp&nbsp\(oo)\_______',
      '&nbsp&nbsp&nbsp&nbsp(__)\&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp)\/\'',
      '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp||----w |',
      '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp||&nbsp&nbsp&nbsp&nbsp&nbsp||',
    '',
    '', ]
  for (var i = 0; i < output.length; i++) {
    var out = '<span>' + output[i] + '</span><br/>'
    Output(out);
  }
  seperator();
}


//_________________________________________________________________
// ОЧИСТКА ЭКРАНА
//_________________________________________________________________
function clearConsole() {
  output.html("");
  Output('<span>clear</span></br>');
}


//_________________________________________________________________
// ВЫВОД ВСЕХ ДОСТУПНЫХ КОМАНД
//_________________________________________________________________
function help() {
  var commandsArray = ['Help: List of available commands', '>help', '>about', '>contact', '>clear', '>ls', '>open', '>say', '>snow', '>super root', '>gpt'];
  if (SUPER_ROOT_FLAG === true) {
      commandsArray.push(
          '-------------',
          '>begin attack',
          '>change site name',
          '>delete',)
  }
  for (var i = 0; i < commandsArray.length; i++) {
    var out = '<span>' + commandsArray[i] + '</span><br/>'
    Output(out);
  }
}


//_________________________________________________________________
// ЗАПУСК ПРОВЕРКИ ПОЛЬЗОВАТЕЛЯ НА РУТ ПРАВА И ВВЕДЕНИЯ ПАРОЛЯ
//_________________________________________________________________
function check_roots() {
    heading.textContent = 'Enter:'
    check_root_flag = true;
    var contactArray = ['>super root', 'Вы запросили супер права', 'Для получения полного доступа введите пароль ниже', 'Для выхода из режима выполните команду >exit super root'];
    seperator();
    for (var i = 0; i < contactArray.length; i++) {
        var out = '<span>' + contactArray[i] + '</span><br/>'
        Output(out);
    }
}


//_________________________________________________________________
// ОТКРЫТИЕ ФАЙЛОВ ИЗ LS
//_________________________________________________________________
function open(programm) {
    var programmName = programm.substr(programm.indexOf(' ') + 1);

    switch (programmName) {
        case 'console.html':
            seperator();
            var console = [
              '',
              '&lt;!DOCTYPE html&gt;',
            '&lt;html lang="ru"&gt;', '&lt;head&gt;',
            '&nbsp&lt;meta charset="utf-8"&gt;', '&nbsp&lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;',
            '&nbsp&lt;title&gtКонсоль&lt;/title&gt;',
            '&nbsp&lt;link rel="stylesheet" href="/static/main/css/applications_css/gpt_client.css"&gt;',
            '&lt;/head&gt;',
            '&lt;body&gt;',
            '&nbsp&lt;header id="superHeader" class="fixed-top"&gt;',
            '&nbsp&nbsp&lt;div class="superClassContainer"&gt;',
            '&nbsp&nbsp&nbsp&lt;h1&gt;Mecoding.ru&lt;/h1&gt;',
            '&nbsp&nbsp&lt;/div&gt;',
            '&nbsp&lt;/header&gt;',
            '&nbsp&lt;section id="SuperHero" class="d-flex align-items-center justify-content-center"&gt;',
            '&nbsp&nbsp&lt;div class="container"&gt;',
            '&nbsp&nbsp&nbsp&lt;h1&gt;Mecoding console&lt;/h1&gt;',
            '&nbsp&nbsp&lt;/div&gt;',
            '&nbsp&nbsp&lt;div class="ConsoleContainer" id="superSolution"&gt;&lt;/div&gt;',
            '&nbsp&lt;footer class=" text-center " style="background-color:#2c2c2c;"&gt;',
            '&nbsp&nbsp&lt;div class="container p-4"&gt;',
            '&nbsp&nbsp&nbsp&lt;section&gt;',
            '&nbsp&nbsp&nbsp&nbsp&lt;a class="btn btn-primary btn-floating m-1" style="background-color: #2c2c2c" href="#!" role="button"&gt;&lt;i class="fab fa-facebook-f"></i&gt;&lt;/a&gt;',
            '&nbsp&nbsp&nbsp&lt;/section&gt;',
            '&nbsp&nbsp&lt;/div&gt;',
            '&nbsp&nbsp&lt;div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2); font-family: "amstrad"; color: #ffffff "&gt;',
            '&nbsp&nbsp&nbsp2023 MeCoding.ru All rights reserved',
            '&nbsp&nbsp&lt;/div&gt;',
            '&nbsp&lt;/footer&gt;',
            '&lt;/body&gt;',
            '&lt;/html&gt;', ''];
            for (var i = 0; i < console.length; i++) {
                var out = '<span>' + console[i] + '</span><br/>'
                Output(out);
            }
            seperator();
            break;

        case 'console.css':
            seperator();
            var css = [
              '',
            'html, body {',
            '&nbspheight: 100%;',
            '&nbspbackground: -webkit-linear-gradient(90deg, #000000,#124a49,#0a8494);',
            '&nbspbackground: linear-gradient(90deg, #000000,#124a49,#0a8494);',
            '}',
            '@media screen and (max-width: 540px) {',
            '&nbsp#SuperHero h1 {',
            '&nbsp&nbspmargin: 20px 20px 0 20px;',
            '&nbsp&nbspfont-family: "rus_amstrad";',
            '&nbsp&nbspfont-weight: 700;',
            '&nbsp&nbspline-height: 30px;',
            '&nbsp&nbspfont-size: calc(9px + 3vw);',
            '&nbsp&nbspcolor: #ffffff;',
            '&nbsp}',
            '}',
            '',
            'footer {',
            '&nbspmargin-top: 80px;',
            '&nbspbackground-color: #2c2c2c;',
            '&nbspalign-items: flex-end;',
            '}',
            '',
            '@font-face {',
            '&nbspfont-family: "amstrad";',
            '&nbspsrc: url("../fonts/amstrad/amstrad.ttf") format("truetype");',
            '&nbspfont-style: normal;',
            '&nbspfont-weight: normal;',
            '}', '']

            for (var i = 0; i < css.length; i++) {
                var out = '<span>' + css[i] + '</span><br/>'
                Output(out);
            }
            seperator();
            break;

        case 'console.js':
            seperator();
            var js = [
              '',
              'var YouDontHavePermission = true;',
              'console.log(YouDontHavePermission);',
              ''
              ]

            for (var i = 0; i < js.length; i++) {
                var out = '<span>' + js[i] + '</span><br/>'
                Output(out);
            }
            seperator();
            break;

        case 'passwords.txt':
            seperator();
            var js = [
              '',
              'iPhone: 1234',
              'Macbook: 4321',
              'iMac: 1324',
              'Linux System: supertruper1234',
              'Car: X123.Y456.Z789',
              ''
              ]

            for (var i = 0; i < js.length; i++) {
                var out = '<span>' + js[i] + '</span><br/>'
                Output(out);
            }
            seperator();
            break;
        case 'credit_card_data.ini':
            seperator();
            var ini = [
              '',
              '[card_1]',
              'name = Nikita',
              'password = 7777',
              'code = 999',
              '',
              '[card_2]',
              'name = Nikita',
              'password = 7890',
              'code = 777',
              ''
              ]

            for (var i = 0; i < ini.length; i++) {
                var out = '<span>' + ini[i] + '</span><br/>'
                Output(out);
            }
            seperator();
            break;
        case 'passport.png':
            seperator();
            var passp = [
              '',
              '┈┈┈╱╱',
              '┈┈╱╱╱▔',
              '┈╱╭┈▔▔╲',
              '▏┊╱╲┈╱▏',
              '▏▕╮▕▕╮▏',
              '▏▕▋▕▕▋▏',
             '╱▔▔╲╱▔▔╲╮┈┈╱▔▔╲',
             '▏▔▏┈┈▔┈┈▔▔▔╱▔▔╱',
              '╲┈╲┈┈┈┈┈┈┈╱▔▔▔',
              '┈▔╲╲▂▂▂▂▂╱',
              '┈┈▕━━▏',
              '┈┈▕━━▏',
              '╱▔▔┈┈▔▔╲',
              '']

            for (var i = 0; i < passp.length; i++) {
                var out = '<span>' + passp[i] + '</span><br/>'
                Output(out);
            }
            seperator();
            break;

        case 'donut.txt':
            seperator();
            var file = [
              '',
                            '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspk;double sin()',
                      '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp,cos();main(){float A=',
                    '&nbsp&nbsp&nbsp&nbsp&nbsp0,B=0,i,j,z[1760];char b[',
                  '&nbsp&nbsp&nbsp1760];printf("\x1b[2J");for(;;12',
                '&nbsp){memset(b,32,1760);memset(z,0,7)',
                ';for(j=0;6.28>j;j+=0.07)for(i=0;6.28',
              '>i;i+=0.02){float c=sin(i),d=cos(j),e=',
              'sin(A),f=sin(j),g=cos(A),h=d+2,D=1/(c*',
              'h*e+f*g+5),l=cos&nbsp&nbsp&nbsp&nbsp      (i),m=cos(B),n=s\'',
              'in(B),t=c*h*g-f*&nbsp&nbsp&nbsp        &nbspe;int x=40+30*D*',
              '(l*h*m-t*n),y=&nbsp&nbsp&nbsp&nbsp     &nbsp&nbsp12+15*D*(l*h*nfgh',
              '+t*m),o=x+80*y,&nbsp&nbsp&nbsp   &nbsp&nbsp       N=8*((f*e-c*d*gh',
              ')*m-c*d*e-f*g-l &nbsp&nbsp &nbsp&nbsp      *d*n);if(22>y&&',
              'y>0&&x>0&&80>x&&D>z[o]){z[o]=D;;;b[o]=',
              '".,-~:;=!*#$@"[N>0?N:0];}}/*#****!!-*/',
                '&nbspprintf("\x1b[H");for(k=0;1761>k;k++)',
                '&nbsp&nbspputchar(k%80?b[k]:10);A+=0.04;B+=',
                  '&nbsp&nbsp&nbsp0.02;}}/*****####*******!!=;:~',
                    '&nbsp&nbsp&nbsp&nbsp&nbsp~::==!!!**********!!!==::-',
                      '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp.,~~;;;========;;;:~-.',
                          '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp..,--------,*/',
              '']

            for (var i = 0; i < file.length; i++) {
                var out = '<span>' + file[i] + '</span><br/>'
                Output(out);
            }
            seperator();
            break;
        case 'mecoding.txt':
            seperator();
            var file = [
              '╔╗──╔╗╔═══╗╔══╗╔══╗╔══╗─╔══╗╔╗─╔╗╔═══╗────────╔═══╗╔╗╔╗',
              '║║──║║║╔══╝║╔═╝║╔╗║║╔╗╚╗╚╗╔╝║╚═╝║║╔══╝────────║╔═╗║║║║║',
              '║╚╗╔╝║║╚══╗║║──║║║║║║╚╗║─║║─║╔╗─║║║╔═╗────────║╚═╝║║║║║',
              '║╔╗╔╗║║╔══╝║║──║║║║║║─║║─║║─║║╚╗║║║╚╗║────────║╔╗╔╝║║║║',
              '║║╚╝║║║╚══╗║╚═╗║╚╝║║╚═╝║╔╝╚╗║║─║║║╚═╝║───╔╗───║║║║─║╚╝║',
              '╚╝──╚╝╚═══╝╚══╝╚══╝╚═══╝╚══╝╚╝─╚╝╚═══╝───╚╝───╚╝╚╝─╚══╝',

              '']

            for (var i = 0; i < file.length; i++) {
                var out = '<span>' + file[i] + '</span><br/>'
                Output(out);
            }
            seperator();
            break;
        case 'cat.txt':
            seperator();
            var file = [
              '',
              '╭━╮┈╭━╮┈┈┈┈┈╭━╮',
              '┃╭╯┈┃┊┗━━━━━┛┊┃',
              '┃╰┳┳┫┏━▅╮┊╭━▅┓┃',
              '┃┫┫┫┫┃┊▉┃┊┃┊▉┃┃',
              '┃┫┫┫╋╰━━┛▅┗━━╯╋',
              '┃┫┫┫╋┊┊┊┣┻┫┊┊┊╋',
              '┃┊┊┊╰┈┈┈┈┈┈┈┳━╯',
              '┃┣┳┳━━┫┣━━┳╭╯',
              '']

            for (var i = 0; i < file.length; i++) {
                var out = '<span>' + file[i] + '</span><br/>'
                Output(out);
            }
            seperator();
            break;
        default:
            seperator();
            var file = ['Такого файла нет...', 'Проверьте имя и наличие файла!']

            for (var i = 0; i < file.length; i++) {
                var out = '<span>' + file[i] + '</span><br/>'
                Output(out);
            }
            seperator();
            break;
    }


}


//_________________________________________________________________
// ФУНКЦИЯ ПРОГОВАРИВАНИЯ СООБЩЕНИЙ ПОЛЬЗОВАТЕЛЯ
//_________________________________________________________________
function sayThis(data) {
  speechSynthesis.speak(new SpeechSynthesisUtterance(data.substr(data.indexOf(' ') + 1)));
  data = data.substr(data.indexOf(' ') + 1);
  Output('<span class="green">[say]:</span><span>' + data + '</span></br>');
}


//_________________________________________________________________
// ФУНКЦИЯ ДОСТУПА К ФАЙЛОВОЙ СИСТЕМЕ
//_________________________________________________________________
function ls() {
    seperator();
    var lsArray = ['console.html\t||\tconsole.css\t||\tconsole.js', '', 'passwords.txt\t||\tcredit_card_data.ini\t||\tpassport.png', '', 'donut.txt\t||\tmecoding.txt\t||\tcat.txt'];
    for (var i = 0; i < lsArray.length; i++) {
        var out = '<span>' + lsArray[i] + '</span><br/>'
        Output(out);
    }
    seperator();
}


// sudo?!? not really
function sudo(data) {
  data = data.substr(data.indexOf(' ') + 1);
  if (data.startsWith("say") === true) {
    data = "Not gona " + data + " to you, you don\'t own me!"
  } else if (data.startsWith("apt-get") === true) {
    data = "<span class='green'>Updating...</span> The cake is a lie! There is nothing to update..."
  } else {
    data = "The force is week within you, my master you not be!"
  }
  Output('<span>' + data + '</span></br>');
}


function aboutMe() {
  var aboutMeArray = ['>About:', 'Привет!', 'Меня зовут Никита и я разработчик', 'Надеюсь тебе тут нравится!'];
  seperator();
  for (var i = 0; i < aboutMeArray.length; i++) {
    var out = '<span>' + aboutMeArray[i] + '</span><br/>'
    Output(out);
  }
  seperator();
}

function contactMe() {
  var contactArray = ['>Contact:', '[GitHub](https://github.com/nikita20002000)'];
  seperator();
  for (var i = 0; i < contactArray.length; i++) {
    var out = '<span>' + contactArray[i] + '</span><br/>'
    Output(out);
  }
  seperator();
}

// Prints out the result of the command into the output div
function Output(data) {
  $(data).appendTo(output);
}



function gpt(){
  flag = true;
  var contactArray = ['>gpt', 'Подключение к серверам CHAT GPT...', 'Подключение выполнено успешно!', 'Задайте ваш вопрос и начните общение', 'Для выхода из режима выполните команду >exit gpt'];
  seperator();
  for (var i = 0; i < contactArray.length; i++) {
    var out = '<span>' + contactArray[i] + '</span><br/>'
    Output(out);
  }
}



function getAnswer(input) {
  seperator()
  var out = '<span>' + 'User: '+ input + '</span><br/>'
  Output(out);

  let request = axios.create({
    headers: {
      Authorization: `Bearer ${OPENAI_API_KEY}`
    }
  })

    const requestFunc = () => {

    if (input) {
      let message = {
        "role": "user",
        "content": `${input}`
      }
      let params = {
        "model": "gpt-3.5-turbo",
        "messages": [message]
      }
      seperator()
      request.post('https://api.openai.com/v1/chat/completions', params)
          .then(response => {
            Output('<span>' + 'Gpt ассистент: ' + response.data.choices[0].message.content + '</span><br/>')
          });
    }
  }
  requestFunc()
}

//_______________________________________________________________
//ФУНКЦИИ СУПЕР ПРАВ
//_______________________________________________________________
// ФУНКЦИЯ BEGIN ATTAC
//_______________________________________________________________
function attack() {
    const page = document.querySelector('html');
    const page_section_name = document.getElementById('sectionName')
    const page_brand = document.getElementById('mainNAME')
    const footer = document.querySelector('footer')

    page_section_name.textContent = '%#^@#!^#*@*!#*!(#!(##))';
    page_section_name.style.color = 'red';

    document.body.style.background = 'black';
    page.style.background = 'black';
    page.style = ''

    footer.style.background = 'red';

    page_brand.textContent = '#################'
}


//_______________________________________________________________
// ФУНКЦИЯ DELETE
//_______________________________________________________________
function del(){
    const html = document.querySelector('html')
    const page = html.parentNode;
    page.removeChild(html)
}


//_______________________________________________________________
// ФУНКЦИЯ СМЕНЫ НАЗВАНИЯ САЙТА
//_______________________________________________________________
function changeName(inputVal) {
    const name = document.getElementById('siteName');
    siteName.textContent = inputVal;
    Output('<span>' + 'Вы успешно изменили название сайта на ' + '<span class="green">' + `${inputVal}` + '</span>' + '!' + '</span><br/>')


    seperator();
    heading.textContent = 'Super$';
    CHANGE_SITE_NAME_FLAG = false;
}


//_______________________________________________________________
// ФУНКЦИЯ СМЕНЫ НАЗВАНИЯ САЙТА
//_______________________________________________________________
function changeFonts(){
    document.querySelector('body').style.fontFamily = "emoji !important";
}




function let_it_snow() {
    var js = document.createElement('script'); js.src = "https://thecode.media/wp-content/uploads/2019/12/snowfall2020.js"; document.body.appendChild(js);
}

