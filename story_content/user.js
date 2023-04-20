function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5ZBdjwQYRVA":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbydD8jBIAU9U55JQFD1-2BvuRgEI7qnhyj2ELOlPce4UdJB0gcbamD8-DG1sT1prS8uzg/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

