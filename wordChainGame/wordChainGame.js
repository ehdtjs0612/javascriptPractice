let participant = Number(prompt('몇 명이 참가하나요?'));
    let $participant = document.querySelector('#participant');
    let $keyword = document.querySelector('#word');
    let $input = document.querySelector('#inputTextField');
    let $btn = document.querySelector('button');

    let keyword;
    let newWord;

    const onclickButton = () => {
      if (!keyword || keyword[keyword.length - 1] === newWord[0]) { //키워드가 비워져있으면 첫번째 참가자이다
        keyword = newWord;
        $keyword.textContent = keyword;

        let number = parseInt($participant.textContent);
        if (number + 1 > participant) {
          $participant.textContent = 1;
        } else {
          $participant.textContent = number + 1;
        }
      } else {
        alert('올바르지 않음');
      }
      $input.value = "";
      $input.focus();
    }

    const onInput = (event) => {
      newWord = event.target.value;
    }
    
    $btn.addEventListener('click', onclickButton);
    $input.addEventListener('input', onInput);