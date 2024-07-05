document.addEventListener('DOMContentLoaded', function() {
    const url = 'https://example.com'; // يمكنك تغيير هذا الرابط إلى أي موقع ترغب في تضمينه

    const iframe = document.getElementById('embed');
    iframe.src = url;

    fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`)
        .then(response => response.json())
        .then(data => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(data.contents, 'text/html');

            const title = doc.querySelector('title').innerText;
            const description = doc.querySelector('meta[name="description"]')?.getAttribute('content') || 'وصف غير متاح';

            document.getElementById('title').innerText = title;
            document.getElementById('description').innerText = description;
        })
        .catch(error => console.error('Error fetching site data:', error));
});
