import axios from 'axios'
// import { mainPath } from "@/constants/api";
// import headers from "../constants/headers";
// import { getProfile } from "./profile";

export const userLogin = async (data) => {
  console.log(data, 'data')
  // const url = `${mainPath}/login`
  const url = `https://api.bvr.test/v1/login`
  let token = ''
  let user = null

  console.log(data, 'post data')

  try {
    const response = await axios.post(
      url,
      data
      // {
      // headers: headers({ lang: localStorage.lang }),
      // }
    )

    token = response.data.data.token
    user = response.data.data.user
    localStorage.email = data.email

    try {
      const userResponse = await getProfile(token)
      user = userResponse.data.data.user
    } catch (error) {
      // console.error(error);
    }

    return { token, isVerified, user }
  } catch (error) {
    // console.error(error);
  }
}

// export const registerUser = async (data) => {
//   const url = `${mainPath}/register`;
//   try {
//     const response = await axios.post(url, data, {
//       headers: headers({ lang: localStorage.lang }),
//     });

//     localStorage.email = data.email;
//     localStorage.name = data.name;
//     return response;
//   } catch (error) {
//     if (error.response) {
//       return error.response;
//     }
//   }
// };
