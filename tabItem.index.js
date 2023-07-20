const TabScan = props => {
  const {index, onChanged} = props
  const {tabId, displayText} = index
  const onChanges = tabIds => {
    onChanged(tabIds)
  }
  return (
    <li>
      <button onClick={onChanges(tabId)}>{displayText}</button>
    </li>
  )
}

export default TabScan
