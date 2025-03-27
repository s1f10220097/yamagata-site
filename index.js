// main.js
const weatherInfo = document.getElementById('weather-info');

// OpenWeather API情報
const API_KEY = '251ec2cb6fa4248835f6657da3f72849'; // OpenWeather APIキーを挿入
const regions = [
    { name: '村山地域', lat: 38.2682, lon: 140.8694 },
    { name: '置賜地域', lat: 37.9000, lon: 140.1167 },
    { name: '庄内地域', lat: 38.8125, lon: 139.8350 },
    { name: '最上地域', lat: 38.6000, lon: 140.3333 }
];

// 天気データを取得して表示
async function fetchWeather() {
    try {
        weatherInfo.innerHTML = '';

        for (const region of regions) {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${region.lat}&lon=${region.lon}&appid=${API_KEY}&units=metric&lang=ja`);
            const data = await response.json();

            const weatherItem = document.createElement('div');
            weatherItem.className = 'weather-item';
            weatherItem.innerHTML = `
                <h3>${region.name}</h3>
                <p>天気: ${data.weather[0].description}</p>
                <p>温度: ${data.main.temp}&#8451;</p>
            `;

            weatherInfo.appendChild(weatherItem);
        }
    } catch (error) {
        weatherInfo.innerHTML = '<p>天気情報の取得に失敗しました。</p>';
        console.error('Error fetching weather data:', error);
    }
}

// ページ読み込み時に天気情報を取得
window.addEventListener('DOMContentLoaded', fetchWeather);

// メニューのクリック時の挙動を制御
document.querySelectorAll('.dropdown-toggle').forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();
        const submenu = event.target.nextElementSibling;
        submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
    });
});

// モーダルウィンドウの取得
const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const closeModal = document.getElementsByClassName("close")[0];

// 画像をクリックしたときにモーダルを表示
document.querySelectorAll(".images-row img").forEach((img) => {
    img.onclick = function () {
        modal.style.display = "block";
        modalImage.src = this.src;
    };
});

// 閉じるボタンをクリックしたときにモーダルを閉じる
closeModal.onclick = function () {
    modal.style.display = "none";
};

// モーダルの外側をクリックしたときに閉じる
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

