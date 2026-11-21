document.addEventListener("DOMContentLoaded", () => {
    const feedSection = document.querySelector(".feed");

    //fetch('https://api.npoint.io/ed514e69c9cd441353cd')
    fetch('res/Posts.json')
        .then(response => response.json())
        .then(json => {
            json.forEach(post => {
                const article = document.createElement("article");
                article.className = "post";

                let mediaHTML = post.ImagePath 
                    ? `<figure class="post-media"><img src="${post.ImagePath}" alt="Post image"></figure>` 
                    : '';

                article.innerHTML = `
                    <header class="postHeader">
                        <img src="${post.authorAvatar}" alt="User" class="userIcon">
                        <time datetime="${post.Date}" class="post-date">${post.Date}</time>
                    </header>
                    ${mediaHTML}
                    <div class="post-body">
                        <p class="post-text">${post.Text}</p>
                    </div>
                    <footer class="post-footer">
                        <button type="button" class="like-btn" aria-label="Like post">
                            <img src="res/images/Facebook_like_thumb.png" alt="Like icon">
                        </button>
                    </footer>
                `;

                feedSection.appendChild(article);
            });
        })
        .catch(error => console.error('Viga andmete laadimisel:', error));
});