import styles from "../../../styles/payment.style";

import {View, TouchableOpacity, SafeAreaView, ImageBackground, Text, Image, ScrollView} from "react-native";


import * as React from "react";
import { useRouter } from "expo-router";
import{Route} from "expo-router/build/Route";

export default function appointment(){


    const router = useRouter();
    return (
        <SafeAreaView style={styles.PaymentSafeArea}>
            <ScrollView>

                <ImageBackground source={require('../../../assets/images/payment.png')} style={{width:'100%', height:155, marginBottom:10 }}>

                    {/* <View style={styles.MemberNavigationBar}>
                        <View style={styles.HomeNavigation}></View>

                        <View style={styles.MessageAndNotificationNavigation}>
                            <View style={styles.MessageBox}></View>
                            <View style={styles.NortificationBox}></View>
                        </View>

                    </View>  */}

                    <Text style={styles.paymentHeading}>Payments</Text>
                </ImageBackground>


                <View style={styles.PayementRecords}>
                    <View style={styles.payementLine1}>
                        <Text style={styles.WorkOutPlan}>Annual Plan - LKR 95,000.00</Text>
                        <Text style={styles.paid}>Paid</Text>
                    </View>

                    <View style={styles.payementLine2}>
                        <View>
                            <Text style={styles.paymentMaidDateHeading}>Payment Maid Date</Text>
                            <Text style={styles.paymentMaidDate}>2023-04-02</Text>

                        </View>
                        <View>
                            <Text style={styles.paymentExpireDateHeading}>Payment Expire Date</Text>
                            <Text style={styles.paymentExpireDate}>2024-04-02</Text>

                        </View>
                    </View>
                </View>

                <View style={styles.PayementRecords}>
                <View style={styles.payementLine1}>
                        <Text style={styles.WorkOutPlan}>Monthly Plan - LKR 18,000.00</Text>
                        <Text style={styles.paid}>Paid</Text>
                    </View>

                    <View style={styles.payementLine2}>
                        <View>
                            <Text style={styles.paymentMaidDateHeading}>Payment Maid Date</Text>
                            <Text style={styles.paymentMaidDate}>2023-03-02</Text>

                        </View>
                        <View>
                            <Text style={styles.paymentExpireDateHeading}>Payment Expire Date</Text>
                            <Text style={styles.paymentExpireDate}>2023-04-02</Text>

                        </View>
                    </View>
                </View>

                <View style={styles.PayementRecords}>
                <View style={styles.payementLine1}>
                        <Text style={styles.WorkOutPlan}>Monthly Plan - LKR 18,000.00</Text>
                        <Text style={styles.paid}>Paid</Text>
                    </View>

                    <View style={styles.payementLine2}>
                        <View>
                            <Text style={styles.paymentMaidDateHeading}>Payment Maid Date</Text>
                            <Text style={styles.paymentMaidDate}>2023-02-02</Text>

                        </View>
                        <View>
                            <Text style={styles.paymentExpireDateHeading}>Payment Expire Date</Text>
                            <Text style={styles.paymentExpireDate}>2023-03-02</Text>

                        </View>
                    </View>
                </View>

                <View style={styles.PayementRecords}>
                <View style={styles.payementLine1}>
                        <Text style={styles.WorkOutPlan}>Monthly Plan - LKR 18,000.00</Text>
                        <Text style={styles.paid}>Paid</Text>
                    </View>

                    <View style={styles.payementLine2}>
                        <View>
                            <Text style={styles.paymentMaidDateHeading}>Payment Maid Date</Text>
                            <Text style={styles.paymentMaidDate}>2023-01-02</Text>

                        </View>
                        <View>
                            <Text style={styles.paymentExpireDateHeading}>Payment Expire Date</Text>
                            <Text style={styles.paymentExpireDate}>2023-02-02</Text>

                        </View>
                    </View>
                </View>




        </ScrollView>
    </SafeAreaView>
    )

};