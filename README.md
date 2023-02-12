
# React Dynamic Dialog View

Component extended @mui/dialog, dynamic dialog view controller.
## Installation

```bash
  npm install @appinsource/material/dynamic-dialog
```
    
## Features

- High-performance
- Lazy-load with a custom function
- Ready to use

## Usage/Examples

 - You have a complete working [Demo](https://codesandbox.io/s/dynamic-react-dialog-view-controller-yop9q5)




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
| `setContent` | `compoent or string` | "Dialog content"|
| `setAction` | `dialogActionView` | "Instance of AISDialogActionViewController"|
| `setActions` | `Array<dialogActionView>` | "Collection items instance of AISDialogActionViewController"|
| `setDraggable` | `boolean` | "Drag enable/disable" |
| `setMaxWidth` | `DialogMaxSizeType` | "xs", "sm", "md", "lg", "xl"|
| `show` | `void` | "Show dialog" |



## Development
```bash
  npm install
```

## Authors
Süleyman Topaloglu

## License
[MIT](https://choosealicense.com/licenses/mit/)

