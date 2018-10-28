## 玩转中国

### keystore相关配置

```

Alias： pwcapp
Password: 1234567890qwertyuiop

```

### 热更新相关

```
token: sf21IfnCaUDsjxUp6tS7wxvetaqT4ksvOXqog

iOS: 

    ┌────────────┬───────────────────────────────────────┐
    │ Name       │ Deployment Key                        │
    ├────────────┼───────────────────────────────────────┤
    │ Production │ JRpgT635OdAaBtullDDh351z3oVA4ksvOXqog │
    ├────────────┼───────────────────────────────────────┤
    │ Staging    │ cXBTRUa8v9ayibAPJfJSbvlxWBmD4ksvOXqog │
    └────────────┴───────────────────────────────────────┘

android:

    ┌────────────┬───────────────────────────────────────┐
    │ Name       │ Deployment Key                        │
    ├────────────┼───────────────────────────────────────┤
    │ Production │ dqVdxClBRvh8FtF4u748mmu9fI8x4ksvOXqog │
    ├────────────┼───────────────────────────────────────┤
    │ Staging    │ 3DoRocipIheE1YsXk2Wj5Aes4lQH4ksvOXqog │
    └────────────┴───────────────────────────────────────┘
    
命令：
    1、登陆：code-push login
    2、查看所有app：code-push app ls
    3、新建app：code-push app add <appName>
    4、重命名app：code-push app rename <appName> <newAppName>
    5、移除app：code-push app rm <appName>
    6、查看app的部署：code-push deployment ls <appName> [--displayKeys|-k]
    7、查看app的某个部署的发布更新的历史记录：code-push deployment history <appName> <deploymentName> [--displayAuthor|-a]
    8、发布更新：code-push release-react <appName> <platform>
    9、debug：code-push debug <platform>
    10、发布历史记录 code-push deployment history MyProjectIOS Staging
    11、删除 code-push deployment rm

例子：
    1、code-push release-react pwcAndroid android -d production

```