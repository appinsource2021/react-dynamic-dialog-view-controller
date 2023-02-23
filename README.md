
# React Dynamic Dialog View

Component extended @mui/dialog, dynamic dialog view controller.
## Installation

```bash
  npm install @appinsource/material/dynamic-dialog
```

## New Features

```bash
  Until version 1.0.14 content prop was setContent(<component>Content</component>), from version 1.1.1 content setContent( dialog => <component>Content</component>)
```
    
## Features

- High-performance
- Lazy-load with a custom function
- Ready to use



## API Reference

```http
  AISDialogActionViewController
```

| Property  | Type                    | Description                |
| :-------- | -------                | ------------------------- |
| `setLabel` | `compoent or string` | **Required**. Button label |
| `setVariant` | `ButtonVariantType` | "contained","outlined","text"|
| `setColor` | `ActionColorTypes` | "inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning" |
| `setAction` | `Function` | "Callback Function returned ( button, dialog ):void "|
| `setDisabled` | `boolean` | "Disable/enable button"|
| `setInProcess` | `boolean` | "Show/hide button spinner"|
| `remove` | `void` | "Remove button"|


#### Get item

```http
  AISDialogViewController
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `setTitle` | `compoent or string` | dialog title |
| `setSubTitle` | `compoent or string` | "dialog subtitle"|
| `setContent` | `Callback Function` | "Return component or string setContent( dialog => { return <div>Content<div/>})"|
| `setAction` | `dialogActionView` | "Instance of AISDialogActionViewController"|
| `setActions` | `Array<dialogActionView>` | "Collection items instance of AISDialogActionViewController"|
| `setDraggable` | `boolean` | "Drag enable/disable" |
| `setMaxWidth` | `DialogMaxSizeType` | "xs", "sm", "md", "lg", "xl"|
| `setState` | `compoent state` | "dialog.setState({...dialog.state, newKey: newValue})"|
| `show` | `void` | "Show dialog" |



## Acknowledgements




## Development

Create react app
```bash
  npm install @appinsource/material/dynamic-dialog
```


## License

[MIT](https://choosealicense.com/licenses/mit/)


## Authors



Süleyman Topaloglu Frontend/Backend developer since 2013
## Usage/Examples

 - You have a complete working [Demo](https://codesandbox.io/s/dynamic-react-dialog-view-controller-yop9q5)


```javascript
    import logo from './logo.svg';
    import './App.css';
    import AISDialogViewController, {dialogActionView} from "@appinsource/material/dynamic-dialog"
    
    function App() {
    
        const dynamicDialog = () => {
            const closeAction = new dialogActionView()
                .setLabel("Close")
                .setAction((button, modal1) => {
                    modal1.close();
                });
    
            const updateAction = new dialogActionView()
                .setLabel("Update")
                .setVariant("contained")
                .setColor("warning")
                .setAction((button, dialog) => {
                    // Update Dialog content
                    dialog.setContent(dialog1 => "Dialog Content updated with this text" );
                    // Update updateAction
                    button.setInProcess(true).setDisabled(true).setColor("success");
    
                    setTimeout(() => {
                        dialog.setContent(dialog1 => "Dialog Content updated again with this text" );
                        button
                            .setLabel("Ok!")
                            .setDisabled(false)
                            .setInProcess(false)
                            .setVariant("text");
                        closeAction.setVariant('contained').setColor('success');
                        button.setAction((button1, dialog1) => {
                            dialog1.setContent( dialog2 => "3. time Dialog Content updated, and changed again in 5 sec.");
                            dialog1.setTitle('Changed Title to...');
                            button1.setLabel("Inline Clicked").setDisabled(true);
                            setTimeout(() => {
                                dialog1.setContent( dialog2 => "last time Dialog updatged and closing in 3 sec" );
                                button1
                                    .setColor("warning")
                                    .setDisabled(false)
                                    .setAction((button, dialog) => {
                                        dialog1.close();
                                    });
                                setTimeout(() => {
                                    dialog1.close();
                                }, 3000);
                            }, 5000);
                        });
                    }, 3000);
                });
            const dialog = new AISDialogViewController();
            dialog
                .setTitle("I'm a dynamic dialog view")
                .setDraggable(true)
                .setContent(dialog1 => "Inital Content" )
                .setAction(closeAction)
                .setAction(updateAction)
                .setMaxWidth("md")
                .show((modal, component) => {});
        };
    
      return (
        <div className="App">
          <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <button onClick={ dynamicDialog } >
                    Open Dynamic Dialog
                </button>
          </header>
        </div>
      );
    }
    
    export default App;

```

Support this package!
If you like this package, consider giving it a github star ⭐

Also, PR's are welcome!

