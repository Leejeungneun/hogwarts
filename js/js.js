let loc = -1;

$(document).ready(function () {
  // addr(찾아온 주소값) 안에 index5가 포함되어 있는지 확인
  // index5가 포함되어 있다는 것은 메인 화면을 의미함.
  // index5가 포함되어 있지 않을 경우, addr.indexOf('index5') 값은 -1이 된다.
  let addr = window.location.href;
  loc = addr.indexOf('index5');

  all_event();
});

function all_event(){
  // header 위에서 마우스 커서가 사라질 경우, 아래 메뉴바가 보이지 않도록 처리
  $('#mainHeader').hover(function(){
    return false;
  }, function(){
    $('#menubar2').hide();
  });

  // 메인메뉴 아이콘 위에 마우스 커서를 올릴 경우, 아래 메뉴바가 보이지 않도록 처리
  $('#menu').hover(function(){
    $('#menubar2').hide();
  }, function(){
    return false;
  });

  // 메뉴 아이콘 위에 마우스 커서를 올릴 경우, 아래 메뉴바가 보이도록 처리
  $('.menuIcon').hover(function(){
    menubar2Css($(this).attr('id').replace('menu',''));
  }, function(){
    return false;
  });
}

// 메뉴바2 css 적용 1
function menubar2Css(idSep){
  switch(idSep){
  case 'G':
  case 'H':
  case 'R':
  case 'S':
    $('#chBigMenu').val(idSep);
    break;
  default:
  }

  const urlStr = loc == -1 ? 'url(../img/'+idSep+'Flag.png) left center no-repeat' : 'url(./img/'+idSep+'Flag.png) left center no-repeat'
  $('.bgImg').css('background', urlStr);
  $('.bgImg').css('background-size', 'cover'); 

  $('#menubar2').show();
}

// 메인 화면 이동
function goMain(){
  location.href = loc == -1 ? "../index5.html" : "./index5.html";
}

// 그 외 페이지 이동
function goMenuPage(title){
  title = $('#chBigMenu').val()+title;
  location.href = loc == -1 ? "./menu"+title+".html" : "./html/menu"+title+".html";
}