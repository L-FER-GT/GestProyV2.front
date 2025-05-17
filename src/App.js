import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
function App() {
    const [count, setCount] = useState(0);
    const fetchUsuarios = async () => {
        try {
            const response = await fetch('https://gestproyv2-back.onrender.com/usuarios');
            if (!response.ok) {
                throw new Error('Error al obtener usuarios');
            }
            const usuarios = await response.json();
            console.log(usuarios);
            return usuarios;
        }
        catch (error) {
            console.error('Error:', error);
        }
    };
    return (_jsxs(_Fragment, { children: [_jsxs("div", { children: [_jsx("a", { href: "https://vite.dev", target: "_blank", children: _jsx("img", { src: viteLogo, className: "logo", alt: "Vite logo" }) }), _jsx("a", { href: "https://react.dev", target: "_blank", children: _jsx("img", { src: reactLogo, className: "logo react", alt: "React logo" }) })] }), _jsx("h1", { children: "Vite + React" }), _jsxs("div", { className: "card", children: [_jsxs("button", { onClick: () => {
                            fetchUsuarios();
                            setCount((count) => count + 1);
                        }, children: ["count is ", count] }), _jsxs("p", { children: ["Edit ", _jsx("code", { children: "src/App.tsx" }), " and save to test HMR"] })] }), _jsx("p", { className: "read-the-docs", children: "Click on the Vite and React logos to learn more" })] }));
}
export default App;
