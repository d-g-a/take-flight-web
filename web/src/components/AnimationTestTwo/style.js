import styled from "styled-components";

export const AnimationTestTwoWrpper = styled.div`

@use postcss-preset-env;

*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    height: 100%;
}

body {
    margin: 0;
    padding: 1.25em;
    height: 100%;
    color: white;
    font: 0.85em -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    min-width: 320px;
}

p {
    margin-bottom: 1em;
}

.filter {
    position: absolute;
    top: 0;
    left: -1;
    width: 1px;
    height: 1px;
    visibility: hidden;
}

body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    overflow: hidden;
    text-align: center;
    background: radial-gradient(circle, rgba(241, 0, 163, 1) 0%, rgba(210, 14, 14, 1) 100%);
    cursor: pointer;
}

.container {
    position: relative;
    width: 800px;
    height: 400px;
    margin: 0 auto;
}

.displacement {
    filter: url('#dm-filter');
}

.bungeeinline {
    display: block;
    position: relative;
    margin: 0 auto;
    padding: 0.5em;
    top: 50%;
    fill: lime;
    font: 100px/0.75 'Bungee', sans-serif;
    text-align: justify;
}

.infotext {
    font: 0.8em/0.75 'Bungee', sans-serif;
}

`;
