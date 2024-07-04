import React from 'react';              //Reactを読み込んでいる
import { Link } from 'react-router-dom';// 追加 Linkタブを読み込む

class Page3 extends React.Component { //Page2クラスにReact.Componentを継承する 

    // サポート向けマニュアル作成のAPIのURL
    apiUrl2 = 'http://localhost:8000/manual/html/';

    sendData = async () => {
        try {
            const textInput2 = document.getElementById('textInput2').value;
            const response = await fetch(this.apiUrl2, {
                method: 'POST', // POSTメソッドを使用
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    revice_type: "html",
                    hedline : "①日時・乗車地・返却地・クルマを選ぶ",
                    text: textInput2,
                })
            });
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }

            // レスポンスをJSON形式に変換
            const data = await response.json();

            // HTMLの<pre>タグにデータを表示
            document.getElementById('output2-1').innerText = JSON.stringify(data, null, 2);
            const outputElement = document.getElementById('output2-2');
            outputElement.innerHTML = `
              <h2>${data.headline}</h2>
              <p>${data.revised_manual.replace(/\n/g, '<br>')}</p>
            `;
        } catch (error) {
            console.error('Fetch operation failed: ', error);
            document.getElementById('output').innerText = 'Error: ' + error.message;
        }
    }

    render() {                          //画面表示の為のrenderメソッドを定義する
        return (
            <div>
                <h1>RagApp2 マニュアルHTML化</h1>
                  <textarea id="textInput2" placeholder="テキストを入力"></textarea><br/>
                  <button onClick={this.sendData}>API②</button><br/>
                  <pre id="output2-1"></pre>
                  <pre id="output2-2"></pre>
                  <br/>
                  <Link to={`/`}>Go To page1</Link> {/* 追加　Go To page1をクリックするとhttp://localhost:3000/に遷移する */}
            </div>
        );
    }
}

export default Page3;                    //Page2を出力する為に必要