# 【Monaca問題集】『オンラインランキング機能を作ってみよう！「連打ゲーム」』

* 本サンプルは不具合がある場合、issue等から報告いただくようにお願いいたします
* 作成日：2016/6（更新日：2020/6）

![RendaGame](/readme-img/RendaGame.png)

* [Monacaデバッガー](https://ja.monaca.io/debugger.html)使用時(iPhone6)の画面例です

## コンテンツ概要

* [ニフクラ mobile backend](https://mbaas.nifcloud.com/)の機能『データストア』を学習するための問題集です
 * [ニフクラ mobile backend](https://mbaas.nifcloud.com/)の利用登録（無料）が必要です。
* 問題用プロジェクトにはオンラインランキング機能が実装されていない状態の「連打ゲーム」です
 * 既に実装済みの[ニフクラ mobile backend](https://mbaas.nifcloud.com/)を利用するための準備（SDK導入など）方法の詳細は[こちら](https://mbaas.nifcloud.com/doc/current/introduction/quickstart_ios.html)をご覧ください。

# 動作環境

* Cordova 9.0, Javascript SDK ver 3.1.1導入済み
* Monacaデバッグアプリ

## 問題について

* 問題は２問あります
* ２問クリアすると「連打ゲーム」にオンラインランキング機能を実装したアプリが完成します
* [Monaca](https://ja.monaca.io/)（ハイブリットアプリ開発環境）を使用してアプリを作成します
 * アカウントをお持ちでない場合は会員登録（無料）が必要です。
* ブラウザ環境にInternet Explorerは使用できません
 * Google ChromeまたはFire Fox等をご使用ください。

## 問題に取り組む前の準備

### Monacaでプロジェクトインポートしてアプリを起動

![Monaca](/readme-img/Monaca.png)

1. [Monaca](https://ja.monaca.io/)にログインします
1. 左上の「Import Project」をクリックします
1. 「プロジェクト名」を入力します　例）「連打アプリ」
1. 「インポート方法」の「URLを指定してインポート」をチェックし、下記リンクを右クリックでコピーし、貼り付けます
 * 問題用プロジェクト：__[連打ゲーム](https://github.com/NIFCLOUD-mbaas/MonacaFirstApp/archive/master.zip)__
1. 「インポート」をクリックするとインポートされたプロジェクトが作成されます
1. 作成されたプロジェクトを「開く」をクリックして開きます
1. プロジェクトが開き、プレビュー画面が表示されます
 * プレビュー画面あるいは[Monacaデバッガー](https://ja.monaca.io/debugger.html)で遊んでみましょう！

* 動作確認は、プレビュー画面・Monacaデバッガーいずれも__iPhone6__の使用を推奨します

#### 「連打ゲーム」の操作方法

1. 「Start」ボタンをタップします
2. 「3」,「2」,「1」とカウントダウンし、「スタート！」から「タイムアップ！」の10秒間「◎」の部分がタップできるようになります
3. 10秒間の間に何回タップできるかを競う単純なゲームです
4. 10秒経つと名前を入力するアラートが表示されますので、入力し「OK」をクリックします
5. 画面に名前とスコアが表示されます
 * 4.で「キャンセル」をクリックした場合は「保存がキャンセルされました」と表示されます

※__注意__：問題に取り組む前の状態では「ランキングを見る」ボタンをタップしてもランキングは表示されません

### アプリの新規作成とAPIキーの設定

![mBaaS](/readme-img/mBaaS.png)

*  [ニフクラ mobile backend](https://mbaas.nifcloud.com/)にログインしアプリの新規作成を行います
 * アプリ名はわかりやすいものにしましょう。例）「renda」
* アプリが作成されるとAPIキーが２種類（アプリケーションキーとクライアントキー）発行されます
 * 次で使用します。

![Monaca](/readme-img/Monaca.png)

* `js/tapGame.js`を編集します
* 先程[ニフクラ mobile backend](https://mbaas.nifcloud.com/)のダッシュボード上で確認したAPIキーを貼り付けます

![問題0-1](/readme-img/0-1.png)

* それぞれ`YOUR_NCMB_APPLICATION_KEY`と`YOUR_NCMB_CLIENT_KEY`の部分を書き換えます
 * このとき、ダブルクォーテーション（`"`）を消さないように注意してください！

## __【問題１】__：名前とスコアの保存をしてみよう！
`js/tapGame.js`を開きます。下図の__`saveScore`__メソッドを編集し、引数の__`name`__（アラートで入力した名前）と__`score`__（連打ゲームでタップした回数）の値をmBaaSに保存する処理をコーディングしてください

![問題1-1](/readme-img/1-1.png)

* データストアに保存先クラスを作成します
 * クラス名は「`GameScore`」としてください
* `name`を保存するフィールドを「`name`」、`score`を保存するフィールドを「`score`」として保存してください

### ヒント
* [ニフクラ mobile backend](https://mbaas.nifcloud.com/)のドキュメントページをご活用ください
 * [データストア（Monaca）：基本的な使い方](https://mbaas.nifcloud.com/doc/current/datastore/basic_usage_monaca.html)

### コーディング後の作業
問題１のコーディングが完了したら、下記の作業を行います

__【作業1-1】__それぞれ該当する箇所に以下の処理を追記して、実行時にコンソールにログを表示できるようにします

* 保存に成功した場合の処理を行う箇所に追記

```js
// 保存に成功した場合の処理
console.log("保存に成功しました。");
```

* 保存に失敗した場合の処理を行う箇所に追記

```js
// 保存に成功した場合の処理
console.log("保存に失敗しました。エラー:" + error); 
```

* __コンソールログの確認方法（ブラウザのコンソール表示）__
 * プレビュー画面の場合：【Windows】→「F12」キーまたは「Ctrl+Shift+K」、【Mac】「Command+Option+I」で表示されます
 * [デバッガー](https://ja.monaca.io/debugger.html)の場合：画面のアイコンをタップし、「!」マークのアイコンをクリックすると「App Log」画面に表示されます

* __注意__：入力が完了したら必ず__「保存」をクリック__してプロジェクトを保存してください！
 * Windowsの場合「Ctrl+S」、iOSの場合「Command+S」でも保存可能です

__【作業1-2】__プレビュー画面あるいは[デバッガー](https://ja.monaca.io/debugger.html)で実行し、「Start」ボタンを押してゲームを遊びます

* 名前を入力し、「OK」をクリックすると【問題１】で作成した`saveScore`メソッドが呼ばれ、データが保存されます
* このとき下記のいずれかのログが出力されます

 * 「`保存に成功しました。objectId:************`」の場合は保存成功です
 * 「`保存に失敗しました。エラー::************`」の場合は保存失敗です

### 答え合わせ

▼答えはこちら▼

[__【問題１】解答__](https://github.com/NIFCLOUD-mbaas/MonacaFirstApp/blob/AnswerProject/Answer1.md)

## __【問題２】__：ランキングを表示しよう！
`js/Ranking.js`を開きます。下図の`checkRanking`メソッドを編集し、データストアの`GameScore`クラスに保存した`name`と`score`のデータを`score`の降順（スコアの高い順）で検索・取得する処理をコーディングしてください

![問題2-1](/readme-img/2-1.png)

* 検索データ件数は５件とします

### ヒント
* [ニフクラ mobile backend](https://mbaas.nifcloud.com/)のドキュメントページをご活用ください
 * [データストア（Monaca）：基本的な使い方](https://mbaas.nifcloud.com/doc/current/datastore/basic_usage_monaca.html)
 * [データストア（Monaca）：ランキングを作る](https://mbaas.nifcloud.com/doc/current/datastore/ranking_monaca.html)

### コーディング後の作業
問題２のコーディングが完了したら、下記の作業を行います

__【作業2-1】__それぞれ該当する箇所に以下の処理を追記して、実行時にコンソールにログを表示できるようにします

* 検索に成功した場合の処理を行う箇所に追記

```js
// 検索に成功した場合の処理
console.log("検索に成功しました。");
```

* 検索に失敗した場合の処理を行う箇所に追記

```js
// 検索に失敗した場合の処理
console.log("検索に失敗しました。エラー:" +error);
```

* __コンソールログの確認方法（ブラウザのコンソール表示）__
 * プレビュー画面の場合：【Windows】→「F12」キーまたは「Ctrl+Shift+K」、【Mac】「Command+Option+I」で表示されます
 * [デバッガー](https://ja.monaca.io/debugger.html)の場合：画面のアイコンをタップし、「!」マークのアイコンをクリックすると「App Log」画面に表示されます

* __注意__：入力が完了したら必ず__「保存」をクリック__してプロジェクトを保存してください！
 * Windowsの場合「Ctrl+S」、iOSの場合「Command+S」でも保存可能です

__【作業2-2】__プレビュー画面あるいは[デバッガー](https://ja.monaca.io/debugger.html)で実行し、「ランキングを見る」ボタンをタップします
* 画面起動後、`checkRanking`メソッドが呼ばれ、【問題１】で保存されたデータが検索・取得されます
* このとき下記のいずれかのログが出力されます

 * 「`検索に成功しました。`」が表示された場合は検索成功です
 * 「`検索に失敗しました。エラー:************`」が表示された場合は検索失敗です

* 検索の状態（成功・失敗）に関係なく、「ランキングを見る」ボタンをタップしても、まだランキングは表示されません

__【作業2-3】__検索に成功したら、該当する箇所に以下の処理を追記して、取得した値から必要なデータを取り出し、ランキング画面へ反映させる`setData`メソッドを呼びます

* 検索に成功した場合の処理を行う箇所に追記

```js
// テーブルにデータをセット
setData(results);
```

__【作業2-4】__プレビュー画面あるいは[デバッガー](https://ja.monaca.io/debugger.html)で実行し、「ランキングを見る」ボタンを押します

* 先ほどのスコアが表示されれば完成です！おめでとうございます★

### 答え合わせ

▼答えはこちら▼

[__【問題２】解答__](https://github.com/NIFCLOUD-mbaas/MonacaFirstApp/blob/AnswerProject/Answer2.md)

## 参考

* 問題の回答を実装した完全なプロジェクトをご用意しています

▼完成版プロジェクト▼

[__「【完成版】連打ゲーム」__](https://github.com/NIFCLOUD-mbaas/MonacaFirstApp/archive/AnswerProject.zip)

* APIキーを設定してご利用ください
