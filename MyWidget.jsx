const contract = 'ece61a112fbb05b5ff96fd4d63cb259c4bae966477829666d46ddc4e5121d801';

const messages = Near.view(contract, 'get_messages', { limit: 3 });

State.init({ text: "" });

const onChange = ({ target }) => { State.update({ text: target.value }) };

const Message = styled.div`display: flex; gap: 1.2em;`;

const sendMessage = () => {
  const text = state.text;
  Near.call(contract, 'send', { text });
}

return (
  <>
    <div class="container border border-info p-3 " 
    style={{ color: 'white', backgroundColor: 'blue', display: 'flex', alignItems: 'space-around'}}>
      #bOS IRC Clone over {contract}
      <div class="icon-container">
        <span class="icon minimize-icon">-</span>
        <span class="icon maximize-icon">□</span>
        <span class="icon close-icon">×</span>
      </div>

        <Widget src="calebjacob.near/widget/AccountProfile" style={{ color: 'white'}} props={{ accountId: context.accountId, }} />

    </div>
    <div style={{ border: '3px solid rgba(0, 0, 0, 0.05)' }} class="container border border-info p-3">

      {messages.map((message) => (
        <Message>
          <Widget src="calebjacob.near/widget/AccountProfile" props={{ accountId: message.author, }} />
          <Widget src="andyh.near/widget/TimeAgo" props={{ blockHeight: message.block_height, }} />
          <p>{message.text}</p>
        </Message>
      ))}
      <hr />
      <div>
        <input onChange={onChange} type="text" />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  </>
);