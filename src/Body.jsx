import "/css/Body.css";

function Body() {
    return (
        // Body 컴포넌트 전체를 감싼다
        <div className="bodyWrapper">
            {/* 프로필사진 + 자기소개 컴포넌트 */}
            <ul className="profileWrapper">
                {/* 프로필 사진 (public 폴더) */}
                <img src="/profile.png" className="profile" />
                <ul>
                    <h1>김예제 xample</h1>
                    <li>✦ I am creative Person</li>
                    <li>🖥️ Junior Frontend Developer</li>
                    <li>
                        {/* 태그와 태그 사이에 띄어쓰기를 추가하고 싶을 땐 {" "}를 쓰면 됩니다 */}
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
                {/* 경험 소개 컴포넌트 */}
                <ul className="intro">
                    <li>
                        <h3>🎓 2025.03 ~ 2025.04</h3>
                        <span>국립대학교 컴퓨터공학과 재학</span>
                        {/* '교내 플리마켓 홍보 사이트'만 링크이고, '제작 및 운영'은 일반 텍스트 */}
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
                {/* 작업물 소개 컴포넌트 */}
                <ul className="portfolio">
                    {/* 첫 번째 작업물 */}
                    <li>
                        {/* 이미지에 링크 걸기 */}
                        <a href="#">
                            <img src="/consult.png" />
                        </a>
                        <a href="#">
                            <h3>컨설팅 웹 서비스</h3>
                        </a>
                        <span>도움이 될 만한 서비스입니다.</span>
                        <span>#React #Vite</span>
                    </li>
                    {/* 두 번째 작업물 */}
                    <li>
                        <a href="#">
                            <img src="/making.png" />
                        </a>
                        <a href="#">
                            <h3>또 다른 웹 서비스</h3>
                        </a>
                        <span>기존 서비스를 개선해 보았습니다.</span>
                        <span>#반응형 #REST_API</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Body;
