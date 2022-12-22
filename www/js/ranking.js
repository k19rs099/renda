//
//  tapGame.js
//  MonacaFirstApp
//
//  Created by Natsumo Ikeda on 2016/07/01.
//  Copyright 2017 FUJITSU CLOUD TECHNOLOGIES LIMITED All Rights Reserved.
//

// 「ランキングを見る」ボタン押下時の処理
function toRanking() {
    // データ取得
    checkRanking();
    // ランキング画面へ遷移
    window.location.href = "#ranking-page";
}

// 【mBaaS】保存したデータの検索と取得
function checkRanking() {
    // **********【問題２】ランキングを表示しよう！**********
    // 保存先クラスを作成
    var highScore = ncmb.DataStore("GameScore");
    // scoreの降順でデータ
    highScore.order("score", false)
        .limit(5).fetchAll()
        .then(function (results) {
            // 検索に成功した場合の処理
            console.log("検索に成功しました。");
            // テーブルにデータをセット
            setData(results);
        })
        .catch(function (error) {
            // 検索に失敗した場合の処理
            console.log("検索に失敗しました。エラー:" + error);
        });
    // ******************************************************
}

// テーブルにデータを設定
function setData(array) {
    var table = document.getElementById("rankingTable");
    for (i = 0; i < array.length; i++) {
        // 名前の設定
        var name = table.rows[i].cells[1];
        name.innerHTML = array[i].name + "さん";
        // スコアの設定
        var score = table.rows[i].cells[2];
        score.innerHTML = array[i].score;
    }
}







