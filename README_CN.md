
## 主要功能

- 在 1 分钟内使用 Vercel **免费一键部署**
- 精心设计的 UI，响应式设计，支持深色模式
- 极快的首屏加载速度（~100kb）
- 海量的内置 prompt 列表，来自[中文](https://github.com/PlexPt/awesome-chatgpt-prompts-zh)和[英文](https://github.com/f/awesome-chatgpt-prompts)
- 自动压缩上下文聊天记录，在节省 Token 的同时支持超长对话
- 一键导出聊天记录，完整的 Markdown 支持
- 拥有自己的域名？好上加好，绑定后即可在任何地方**无障碍**快速访问

## 保持更新

如果你按照上述步骤一键部署了自己的项目，可能会发现总是提示“存在更新”的问题，这是由于 Vercel 会默认为你创建一个新项目而不是 fork 本项目，这会导致无法正确地检测更新。
推荐你按照下列步骤重新部署：

- 删除掉原先的 repo；
- fork 本项目；
- 前往 vercel 控制台，删除掉原先的 project，然后新建 project，选择你刚刚 fork 出来的项目重新进行部署即可；
- 在重新部署的过程中，请手动添加名为 `OPENAI_API_KEY` 的环境变量，并填入你的 api key 作为值。

本项目会持续更新，当你 Fork 项目之后，默认会每天自动同步上游代码，无需额外操作。

如果你想让手动立即更新，可以查看 [Github 的文档](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork) 了解如何让 fork 的项目与上游代码同步。

你可以 star/watch 本项目或者 follow 作者来及时获得新功能更新通知。

## 配置页面访问密码

> 配置密码后，用户需要在设置页手动填写访问码才可以正常聊天，否则会通过消息提示未授权状态。

> **警告**：请务必将密码的位数设置得足够长，最好 7 位以上，否则[会被爆破](https://github.com/Yidadaa/ChatGPT-Next-Web/issues/518)。

本项目提供有限的权限控制功能，请在 Vercel 项目控制面板的环境变量页增加名为 `CODE` 的环境变量，值为用英文逗号分隔的自定义密码：

```
code1,code2,code3
```

增加或修改该环境变量后，请**重新部署**项目使改动生效。

## 环境变量

> 本项目大多数配置项都通过环境变量来设置。

### `OPENAI_API_KEY` （必填项）

OpanAI 密钥，你在 openai 账户页面申请的 api key。

### `CODE` （可选）

访问密码，可选，可以使用逗号隔开多个密码。

**警告**：如果不填写此项，则任何人都可以直接使用你部署后的网站，可能会导致你的 token 被急速消耗完毕，建议填写此选项。

### `BASE_URL` （可选）

> Default: `api.openai.com`

OpenAI 接口代理 URL，如果你手动配置了 openai 接口代理，请填写此选项。

### `PROTOCOL` （可选）

> Default: `https`

> Values: `http` | `https`

OpenAI 代理接口协议，如果遇到 ssl 证书问题，请尝试通过此选项设置为 http。

### 本地开发

1. 安装 nodejs 和 yarn，具体细节请询问 ChatGPT；
2. 执行 `yarn install && yarn dev` 即可。
