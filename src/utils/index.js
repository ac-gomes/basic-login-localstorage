const errorIdList = document.getElementById('error-list');

function getErrorIdList(){
  const errorList = errorIdList.childNodes

  const Idlist = [...errorList].map((item,index) => {
    return errorList[index].id
  })

  return Idlist;
};

const Functions = {
  getErrorIdList,
}

export default Functions;