import "/css/Body.css";

function Body() {
    return (
        <div className="bodyWrapper">
            <ul className="profileWrapper">
                <img src="/profile.png" className="profile" />
                <ul>
                    <h1>김예제 xample</h1>
                    <li>✦ I am creative Person</li>
                    <li>🖥️ Junior Frontend Developer</li>
                    <li>
                        💙{" "}
                        <a href="https://https://www.typescriptlang.org/" target="_blank">
                            TypeScript
                        </a>
                        ,{" "}
                        <a href="https://react.dev/" target="_blank">
                            React
                        </a>
                        ,{" "}
                        <a href="https://vite.dev/" target="_blank">
                            Vite
                        </a>
                    </li>
                    <li>🥪 일요일의 맛집 탐험가</li>
                </ul>
            </ul>
            <div>
                <h2>경험 소개</h2>
                <ul className="intro">
                    <li>
                        <h3>🎓 2025.03 ~ 2025.04</h3>
                        <span>국립대학교 컴퓨터공학과 재학</span>
                        <span>
                            <a link="#">교내 플리마켓 홍보 사이트</a> 제작 및 운영
                        </span>
                    </li>
                    <li>
                        <h3>💼 2024.06 ~ 2024.12</h3>
                        <span>편의점 아르바이트</span>
                    </li>
                </ul>
                <h2>작업물 소개</h2>
                <ul className="portfolio">
                    <li>
                        <img src="/consult.png" />
                        <h3>컨설팅 웹 서비스</h3>
                        <span>도움이 될 만한 서비스입니다.</span>
                        <span>#React #Vite</span>
                    </li>
                    <li>
                        <img src="/making.png" />
                        <h3>또 다른 웹 서비스</h3>
                        <span>기존 서비스를 개선해 보았습니다.</span>
                        <span>#반응형 #REST_API</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Body;
