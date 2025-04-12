import "../css/Header.css";

function Header() {
    return (
        <div className="headerWrapper">
            {/* "/"라고 적으면 이 홈페이지의 최상위 메인화면으로 갑니다 */}
            <a href="/" className="title">
                simple xample
            </a>
            {/* 순서가 없는 리스트(unlisted) 내부에 목록(list)이 4개 있고, 각 list 안에는 링크를 담는 anchor가 하나씩 있다 */}
            <ul className="contacts">
                <li>
                    {/* mailto:를 사용한 링크는.. 직접 눌러 보세요! */}
                    <a href="mailto:example@email.com">이메일</a>
                </li>
                <li>
                    {/* target="_blank" 링크가 새 탭에서 열림 (기본값: 현재 탭에서 열림) */}
                    <a href="https://github.com/example" target="_blank">
                        깃허브
                    </a>
                </li>
                <li>
                    {/* 여긴 target이 없죠? 클릭해서 비교해 보세요 */}
                    <a href="https://example.tistory.com">블로그</a>
                </li>
                <li>
                    {/* 아직 뭘 넣을 지 안 정했을 땐 "#"을 써서 임시로 지정합니다 */}
                    <a href="#">메신저</a>
                </li>
            </ul>
        </div>
    );
}

export default Header;
