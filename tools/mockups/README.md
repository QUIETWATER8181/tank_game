# 拼装界面样张（方向对比）

三张静态样张，用**同一份真实数据 + 同一张 3D 底图**，只换界面语言，用来定方向。
不含任何游戏逻辑，不影响 `mode3d.html`，也不碰 `tests/workbench-browser-probe.js` 的选择器。

| 文件 | 方向 | 一句话 |
| --- | --- | --- |
| `mock-a.html` / `shot-a.png` | A 军械档案 | 米黄纸、蓝图、验收单、红印章；3D 是钉在纸上的照片 |
| `mock-b.html` / `shot-b.png` | B 工业 HUD | 枪灰金属、单一琥珀、切角、等宽数字、载荷条 |
| `mock-c.html` / `shot-c.png` | C 夜班工位 | 3D 铺满，UI 变成实物：挂板、工具盘、夹板、粉笔标注 |
| `mock-d1.html` / `shot-d1.png` | **D1 = A 的界面 + C 的场景** | 两张单据挂在工位挂杆上，3D 铺满；粉笔尺寸线、便签、印章 |
| `mock-e.html` / `shot-e.png` | **E = A 的构图 + 手绘语言** | 照片贴纸保留；行楷标题、手写数字、歪线表格、铅笔圈注、手绘俯视图 |

## 重新出图

```sh
# 1) 干净 3D 底图（隐藏全部 HTML 面板，视口铺满 1440×900）
node tools/pseudo3d/shoot.js --page=mode3d.html --afterFile=tools/mockups/_capture3d.js --afterWait=1800 --wait=6500 --out=tools/mockups/scene-clean.png

# 2) 三张样张
node tools/pseudo3d/shoot.js --page=tools/mockups/mock-a.html --wait=2500 --out=tools/mockups/shot-a.png --port=8131 --debugPort=9341
node tools/pseudo3d/shoot.js --page=tools/mockups/mock-b.html --wait=2500 --out=tools/mockups/shot-b.png --port=8132 --debugPort=9342
node tools/pseudo3d/shoot.js --page=tools/mockups/mock-c.html --wait=2500 --out=tools/mockups/shot-c.png --port=8133 --debugPort=9343
node tools/pseudo3d/shoot.js --page=tools/mockups/mock-d1.html --wait=2500 --out=tools/mockups/shot-d1.png --port=8134 --debugPort=9344
node tools/pseudo3d/shoot.js --page=tools/mockups/mock-e.html --wait=2500 --out=tools/mockups/shot-e.png --port=8135 --debugPort=9345
```

## E 的手绘做法（落地时照抄）

- **字体**：标题 `STXingkai`（华文行楷），正文 `KaiTi`，数字 `Ink Free`。全是 Windows 自带，不联网。
- **歪线**：表格横线不用 `border`，用一条 160×6 的 SVG 波浪线做 `background-repeat: repeat-x`。**行数/列宽变了也不会变形**，重绘安全。
- **手绘下划线**：标题、合计行、红色强调都用 SVG path + `background-repeat`，同理。
- **铅笔圈注**：88% 外面那圈是两笔叠在一起的 SVG 椭圆 + `feTurbulence` 位移滤镜（`scale 2`）；照片上的红圈同理（`scale 2.6`）。
- **手绘俯视图**：一张内联 SVG，用位移滤镜把直线抖成手绘线；尺寸线用蓝色，和纸上的红笔区分。
- **纸感**：`feTurbulence` 噪点铺在 `body::after`，`mix-blend-mode: multiply`，透明度 .5。
- **别过头**：手绘只做在线条、圈注、字体上；版式网格仍然是正的，不然会脏。

## D1 的融合规则（要落地就照这个来）

- **纸负责信息，场景负责空间**：所有数值、清单、验收、操作都在纸上；3D 不再被面板切碎。
- **纸是实物**：挂在顶部挂杆上（`clip` + `rail`），有厚度阴影、纸纹、轻微旋转；便签、印章、手写批注都是"人留下的"。
- **标注跟着物体走**：`7.50 m` 粉笔尺寸线、`炮塔 6 t` 引线，落地时用 `camera.project()` 把 3D 点投到屏幕坐标。
- **主按钮是印章**：`制造并入库` 做成红框印章，全屏唯一的红。
- **高级功能做"附页"**：坐标输入、外观绑定、草稿、测试零件塞进主单据后面的一张纸，从边缘拉出来。不要用 accordion。
- **选择器不能丢**：`#boundModel`、`[data-coordinate]`、`[data-action="manufacture"]`、`[data-tab]` 仍要留在 DOM 里（可以藏进附页），否则 `tests/workbench-browser-probe.js` 会挂。

## 改样张时注意

- 三张都用系统自带字体：`SimHei` / `FangSong` / `KaiTi` / `Georgia` / `Cascadia Mono` / `Bahnschrift`，不引入网络字体。
- `scene-clean.png` 是样张共用的底图；换坦克外观后重跑第 1 步即可，三张一起更新。
- 样张是**视觉方向**，不是最终实现。真落地时面板结构要跟着 `workbench.mjs` 的渲染函数改，别直接搬 HTML。
