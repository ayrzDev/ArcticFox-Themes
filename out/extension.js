exports.activate = function(context) {
  // Bir buton oluşturun
  let myButton = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left);
  myButton.text = "My Button";

  // Buton tıklandığında gerçekleşecek eylemi belirtin
  myButton.command = "extension.myButtonCommand";
  
  // Butonu status bar'a ekleyin
  myButton.show();

  // Buton tıklandığında gerçekleşecek eylemi tanımlayın
  let disposable = vscode.commands.registerCommand('extension.myButtonCommand', function () {
      // Mesaj görüntüleyin
      vscode.window.showInformationMessage('My button was clicked!');
  });

  // Uzantınızın sonlandırıldığında kaynakları serbest bırakın
  context.subscriptions.push(disposable);
}
