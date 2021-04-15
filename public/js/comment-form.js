async function newFormHandler(event) {
    event.preventDefault();
    const comment = document.querySelector('#commentbody').value;
    const response = await fetch(`/api/comment`, {
      method: 'POST',
      body: JSON.stringify({
        commentbody,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    //if the dish is added, the 'all' template will be rerendered
    if (response.ok) {
      document.location.replace('/blogpost/:id');
    } else {
      alert('Comment failed.');
    }
  }
  
  document.querySelector('.comment-form').addEventListener('submit', newFormHandler);
    