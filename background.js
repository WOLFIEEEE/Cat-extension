chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: replaceImages,
    });
  });
  
  function replaceImages() {
    const images = document.querySelectorAll('img');
    const catGifs = [
      'https://media.giphy.com/media/5UCV7mJyCWw2N7JYfj/giphy.gif',
      'https://media.giphy.com/media/l4Jz3a8jO92crUlWM/giphy.gif',
      'https://media.giphy.com/media/oF3ttF5JbKzUA/giphy.gif',
      'https://media.giphy.com/media/6uMqzcbWRhoT6/giphy.gif',
      'https://media.giphy.com/media/13AeI0gb8WBqmk/giphy.gif',
      'https://media.giphy.com/media/gVoBC0SuaaAqk/giphy.gif',
      'https://media.giphy.com/media/l1J9s1sPZe8WzKj7y/giphy.gif',
      'https://media.giphy.com/media/4Nc4wrsDGojK4/giphy.gif'
    ];
  
    images.forEach((img) => {
      const randomIndex = Math.floor(Math.random() * catGifs.length);
      img.src = catGifs[randomIndex];
      img.srcset = '';
      img.sizes = '';
    });
  }
  