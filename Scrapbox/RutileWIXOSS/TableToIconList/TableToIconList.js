
javascript:
(function () {

    const table_text = window.prompt("tableテキストの入力", "");
    let icon_list_text = "";

    if (/\[.*?\]\t\d/.test(table_text)) {
        icon_list_text = "[~| ";
        table_text.match(/\[.*?\]\t\d/g).forEach(function (e) {
            const tmp_name   = e.match(/\[.*?\]/)[0];
            const tmp_number = e.match(/\]\t\d/)[0];
            const name   = tmp_name.replace("[", "").replace("]", "");
            const number = tmp_number.replace("]\t", "");
            console.log(e + ":" + name + ":" + number);
            for (let i = 0; i < number; i++) {
                icon_list_text += "[" + name + ".icon]";
            }
        });
    }
    else if (/\[.*?\]/.test(table_text)) {
        icon_list_text = "[| ";
        table_text.match(/\[.*?\]/g).forEach(function (e) {
            const name = e.replace("[", "").replace("]", "");
            icon_list_text += "[" + name + ".icon]";
        });
    }
    icon_list_text += "]";
    window.prompt("iconリスト記法", icon_list_text);
})();
