const connection = new RTCPeerConnection()

connection.onicecandidate=(e)=>console.log("SDP : " + JSON.stringify(connection.localDescription))

const dataChannel = connection.createDataChannel("channel")

dataChannel.onmessage=(e)=> console.log("Message from client2 : " + e.data);
dataChannel.onopen=(e)=> console.log("Connection opened");
dataChannel.onclose =(e)=> console.log("Connection closed");

connection.createOffer().then((offer)=>connection.setLocalDescription(offer))


//process 2

const answer = 'ENTER SDP FROM CLIENT2'
connection.setRemoteDescription(answer)
dataChannel.send("Message")