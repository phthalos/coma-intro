import "../css/Header.css";

function Header() {
    return (
        <div className="headerWrapper">
            <a href="/" className="title">
                simple xample
            </a>
            <ul className="contacts">
                <li>
                    <a href="mailto:example@email.com">이메일</a>
                </li>
                <li>
                    <a href="https://github.com/example" target="_blank">
                        깃허브
                    </a>
                </li>
                <li>
                    <a href="https://example.tistory.com">블로그</a>
                </li>
                <li>
                    <a href="#">메신저</a>
                </li>
            </ul>
        </div>
    );
}

export default Header;
