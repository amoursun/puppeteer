const puppeteer = require('puppeteer');

async function run () {
    // 启动chrome浏览器 headless: true 不打开浏览器
    const browser = await puppeteer.launch({ headless: true });
    // 创建一个新页面
    const page = await browser.newPage();
    // 默认情况，相当于 `await page.setViewport({width: 800, height: 600});` 会被当成移动端设备
    await page.setViewport({width: 1920, height: 1080});
    // 页面指向指定网址
    await page.goto('https://mobile.ant.design/zh/components/button');
    // screenshot 截图
    await page.screenshot({path: 'screenshot.png'});
    // 根据网页内容生成pdf文件
    await page.pdf({path: './screenshot.pdf'});
    browser.close();
}
run();