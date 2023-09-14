import AsyncStorage from "@react-native-async-storage/async-storage";
import { setUser } from "../app/redux/features/userSlice";

export const loadUserFromStorage = async (dispatch: any) => {
    try {
        const userDataString = await AsyncStorage.getItem('@FIT_ZONE_MEMBER_APP_CURRENT_USER')
        console.log(userDataString)
        
        if (userDataString) {
            const userData = JSON.parse(userDataString);
            console.log('userData',userData);
            
            // dispatch(setUser(userData));
        }
    } catch (error) {
        console.error('Error loading user data from AsyncStorage:', error);
    }
};
