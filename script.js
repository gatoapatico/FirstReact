ReactDOM.render(<h1>Hola Ditoval!</h1>, document.getElementById('root'));

function MainContent() {
    return (
        <h1>Otro titulo!</h1>
    )
}

ReactDOM.render(
    <MainContent />,
    document.getElementById("root")
);

const navbar = (
    <nav>
        <h1>Ditoval Page</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
);

ReactDOM.render(navbar, document.getElementById("root"));

function FirstComponent() {
    return (
        <div>
            <h1>This is your first React Component</h1>
        </div>
    );
}

ReactDOM.render(<FirstComponent />, document.getElementById("root"));