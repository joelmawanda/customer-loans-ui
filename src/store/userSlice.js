// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// // import {
// //   getAccountOfficers, getAdministrators, getHistory, getPaymentModes, getShareholderAccountOfficers, getShareholders, getTaxRates, getTickets
// // } from "../service/userService";

// const userSlice = createSlice({
//   name: "userStore",
//   initialState: {
//     user: {
//       first_name: "",
//       last_name: "",
//       email: "",
//       phone_number: "",
//       username: "",
//       company_id: "",
//     },
//     dynamicUser: {
//       tax_rate_code: "TAX_RATE_1000",
//       payment_mode: "BANK_IAT_SBU",
//     },
//     ticket: {},
//     country: {},
//     revisions: [],
//     userFunctionalGroups: [],
//     userModuleAuthorities: [],
//     shareholders: [],
//     administrators: [],
//     accountOfficers: [],
//     shareholderAccountOfficers: [],
//     tickets: [],
//     activities: [],
//     paymentModes: [],
//     // countries: [],
//     taxRates: [],
//     dynamicStatus: "idle",
//     status: "idle",
//     shareholderStatus: "idle",
//     ticketStatus: "idle",
//     Historystatus: "idle",
//     AccountOfficerstatus: "idle",
//     paymentModesStatus: "idle",
//     taxRateStatus: "idle",
//     modulesStatus: "idle",
//     error: "",
//     excelFileError: null,
//     excelFile: null,
//     excelData: null,
//     fileName: "",
//     fileType:"",
//     pages: 0,
//     page_index: 0,
//     page_index_back: 0,
//   },
//   reducers: {
//     replaceOutdatedAdmin: (state, actions) => {
//       console.log('In replaceOutdatedAdmin. payload: ', actions.payload);
//       let res = state.administrators.findIndex(admin => admin.administrator_id === actions.payload.administrator_id);
//       console.log('Index: ', res);
//       state.administrators.splice(res, 1, actions.payload);
//     },
//     replaceOutdatedTicket: (state, actions) => {
//       console.log('In replaceOutdatedTicket. payload: ', actions.payload);
//       let res = state.tickets.findIndex(ticket => ticket.ticket_number === actions.payload.ticket_number);
//       console.log('Index: ', res);
//       state.tickets.splice(res, 1, actions.payload);
//     },
//     addTicket: (state, actions) => {
//       console.log('In addTicket: ', actions.payload);
//       state.tickets.splice(0, 0, actions.payload);
//     },
//     resetDynamicStatus: (state) => {
//       console.log('Let us reset our status');
//       state.dynamicStatus = 'idle';
//     },
//     callAccountOfficers: (state) => {
//       console.log('In userSlice, reducers, callAccountOfficers');
//       console.log('Account officers State: ', state.accountOfficers);
//       getAccountOfficers();
//     },


//     setPage: (state, action) => {
//       console.log("In nextPage. action: ");
//       state.page_index = action.payload;
//     },
//     addFName: (state, action) => {
//       console.log("In addFName. action: ", action);
//       state.dynamicUser.first_name = action.payload;
//     },
//     addLName: (state, action) => {
//       console.log("In addLName. action: ", action);
//       state.dynamicUser.last_name = action.payload;
//     },
//     addPrimaryEmail: (state, action) => {
//       console.log("In addPrimaryEmail. action: ", action);
//       state.dynamicUser.primary_email = action.payload;
//       // state.dynamicUser.email = action.payload;
//     },
//     addSecondaryEmail: (state, action) => {
//       console.log("In addSecondaryEmail. action: ", action);
//       state.dynamicUser.secondary_email = action.payload;
//     },
//     addPrimaryPhone: (state, action) => {
//       console.log("In addPrimaryPhone. action: ", action);
//       state.dynamicUser.primary_phone_number = action.payload;
//       // state.dynamicUser.phone_number = action.payload;
//     },
//     addSecondaryPhone: (state, action) => {
//       console.log("In addSecondaryPhone. action: ", action);
//       state.dynamicUser.secondary_phone_number = action.payload;
//     },
//     addPrimaryAddress: (state, action) => {
//       console.log("In addPrimaryAddress. action: ", action);
//       state.dynamicUser.primary_address = action.payload;
//       // state.dynamicUser.phone_number = action.payload;
//     },
//     addSecondaryAddress: (state, action) => {
//       console.log("In addSecondaryAddress. action: ", action);
//       state.dynamicUser.secondary_address = action.payload;
//     },
//     addAUsername: (state, action) => {
//       console.log("In addAUsername. action: ", action);
//       state.dynamicUser.username = action.payload;
//     },
//     addOfficerCode: (state, action) => {
//       console.log("In addCompanyId. action: ", action);
//       state.dynamicUser.officer_code = action.payload;
//     },
//     addCompanyID: (state, action) => {
//       console.log("In addCompanyID. action: ", action);
//       state.dynamicUser.company_id = action.payload;
//     },
//     addAccountOfficer: (state, action) => {
//       console.log("In addAccountOfficer. action: ", action);
//       state.accountOfficers.splice(0, 0, action.payload);
//     },

//     updateFirstName: (state, action) => {
//       console.log("In UpdateFirstName. action: ", action);
//       state.dynamicUser.first_name = action.payload;
//     },
//     updateLastName: (state, action) => {
//       console.log("In updateLastName. action: ", action);
//       state.dynamicUser.last_name = action.payload;
//     },
//     updateEmail: (state, action) => {
//       console.log("In updateEmail.");
//       state.dynamicUser.email = action.payload;
//     },
//     updatePhone: (state, action) => {
//       console.log("In updatePhone. action: ", action);
//       state.dynamicUser.phone_number = action.payload;
//     },
//     updateUsername: (state, action) => {
//       console.log("In updateUsername. action: ", action);
//       state.dynamicUser.username = action.payload;
//     },

//     addShareholderName: (state, action) => {
//       console.log("In addShareholderName. action: ", action);
//       state.dynamicUser.shareholder_name = action.payload;
//     },
//     addShareholderTaxRate: (state, action) => {
//       console.log("In addShareholderTaxRate. action: ", action);
//       state.dynamicUser.tax_rate_code = action.payload;
//     },
//     addShareholderOtherName: (state, action) => {
//       console.log("In addShareholderOtherName. action: ", action);
//       state.dynamicUser.shareholder_other_name = action.payload;
//     },
//     addShareholderComNumber: (state, action) => {
//       console.log("In addShareholderCode. action: ", action);
//       state.dynamicUser.shareholder_code = action.payload;
//     },
//     addShareholderScd: (state, action) => {
//       console.log("In addShareholderScd. action: ", action);
//       state.dynamicUser.shareholder_scd_number = action.payload;
//     },
//     addShareholderPaymentMode: (state, action) => {
//       console.log("In addShareholderPaymentMode. action: ", action);
//       // state.shareholder.payment_mode = action.payload;
//       state.dynamicUser.payment_mode = "WALLET_MM_FLEXIPAY";
//     },
//     addShareholderPaymentAccount: (state, action) => {
//       console.log("In addShareholderPaymentAccount. action: ", action);
//       state.dynamicUser.payment_account_number = action.payload;
//     },
//     addShareholderPaymentAccountName: (state, action) => {
//       console.log("In addShareholderPaymentAccountName. action: ", action);
//       state.dynamicUser.payment_account_name = action.payload;
//     },
//     addShareholderPaymentBankName: (state, action) => {
//       console.log("In addShareholderPaymentBankName. action: ", action);
//       state.dynamicUser.payment_bank_name = action.payload;
//     },
//     addShareholderPaymentBranchName: (state, action) => {
//       console.log("In addShareholderPaymentBranchName. action: ", action);
//       state.dynamicUser.payment_branch_name = action.payload;
//     },
//     addShareholderPaymentBranchAddress: (state, action) => {
//       console.log("In addShareholderPaymentBranchAddress. action: ", action);
//       state.dynamicUser.payment_branch_address = action.payload;
//     },
//     addShareholderTin: (state, action) => {
//       console.log("In addShareholderTin. action: ", action);
//       state.dynamicUser.tin = action.payload;
//     },
//     addShareholderCategory: (state, action) => {
//       console.log("In addShareholderCategory. action: ", action);
//       if (action.payload === true) {
//         console.log("This is a company");
//         state.dynamicUser.gender = "other";
//       }
//       state.dynamicUser.company = action.payload;
//     },
//     addBrokerCode: (state, action) => {
//       console.log("In addBrokerCode. action: ", action);
//       state.dynamicUser.broker_code = action.payload;
//     },
//     addShares: (state, action) => {
//       console.log("In addShares. action: ", action);
//       state.dynamicUser.shares_held = action.payload;
//     },
//     removeAdministrator: (state, action) => {
//       console.log("In removeAdministrator. action: ", action);
//       state.administrators = state.administrators.filter(
//         (administrator) => administrator.administrator_id !== action.payload
//       );
//     },
//     removeFunctionalGroupAdmin: (state, action) => {
//       console.log("In removeFunctionalGroupAdmin. action: ", action);
//       state.dynamicUser.functional_groups =
//         state.dynamicUser.functional_groups.filter(
//           (fg) => fg.functional_group_name !== action.payload
//         );
//     },
//     updateAuthority: (state, action) => {
//       console.log("In updateAuthority");
//       let index = state.dynamicUser.module_authorities
//         .map((e) => e.module_name)
//         .indexOf(action.payload);
//       // state.dynamicUser.module_authorities[index] = !state.dynamicUser.module_authorities[index];
//     },
//     updateAdministratorDetails: (state, action) => {
//       console.log(
//         "In updateAdministratorDetails. action: ",
//         action.payload.administrator_id
//       );
//       state.administrators = state.administrators.map((administrator) => {
//         if (action.payload.administrator_id === administrator.administrator_id) {
//           console.log("This admin matches....");
//           state.dynamicUser = action.payload;
//         }
//         // (administrator) => administrator.administrator_id === action.payload.administrator_id ? action.payload : administrator)
//       });
//     },
//     updateTicketsDetails: (state, action) => {
//       console.log(
//         "In updateTicketsDetails. action: ",
//         action.payload.ticket_number
//       );
//       state.tickets = state.tickets.map((ticket) => {
//         if (action.payload.ticket_number === ticket.ticket_number) {
//           console.log("This ticket matches....");
//           state.ticket = action.payload;
//         }
//         // (administrator) => administrator.administrator_id === action.payload.administrator_id ? action.payload : administrator)
//       });
//     },
//     searchShareholders: (state, action) => {
//       console.log("In searchShareholders. action: ", action.payload);
//       state.shareholders = action.payload;
//     },
//     addFunctinalGroups: (state, action) => {
//       console.log("In addFunctinalGroups. action: ", action);
//       if (state.userFunctionalGroups.includes(action.payload)) {
//         let index = state.userFunctionalGroups.indexOf(action.payload);
//         state.userFunctionalGroups.splice(index, 1);
//       } else {
//         state.userFunctionalGroups.push(action.payload);
//       }
//     },
//     setAdminFunctionalGroups: (state) => {
//       console.log("In setAdminFunctionalGroups");
//       if (state.dynamicUser.hasOwnProperty("functional_groups")) {
//         console.log("Dynamic user has functional groups");
//         state.userFunctionalGroups.push(
//           ...state.dynamicUser.functional_groups.map(
//             (functional_group) => functional_group.functional_group_name
//           )
//         );
//       }
//     },
//     addModuleAuthorities: (state, action) => {
//       console.log("In addModuleAuthorities. action: ", action);
//       if (state.userModuleAuthorities.includes(action.payload)) {
//         let index = state.userModuleAuthorities.indexOf(action.payload);
//         state.userModuleAuthorities.splice(index, 1);
//       } else {
//         state.userModuleAuthorities.push(action.payload);
//       }
//     },
//     setCurrentAdministrator: (state, action) => {
//       console.log("In currentAdministrator. payload: ", action.payload);
//       state.dynamicUser = action.payload;
//     },
//     setCurrentShareholder: (state, action) => {
//       console.log("In setCurrentShareholder. payload: ", action.payload);
//       state.dynamicUser = action.payload;
//     },
//     setDynamicUser: (state, action) => {
//       console.log("In setDynamicUser. payload: ", action.payload);
//       state.dynamicUser = action.payload;
//     },
//     setModuleStatus: (state) => {
//       state.modulesStatus = 'completed';
//     },
//     setAccountOfficerStatus: (state) => {
//       state.AccountOfficerstatus = 'idle';
//     },
//     setCurrentTicket: (state, action) => {
//       console.log("In setCurrentTicket. payload: ", action.payload);
//       state.ticket = action.payload;
//     },
//     setCurrentCountry: (state, action) => {
//       console.log("In setCurrentCountry. payload: ", action.payload);
//       state.country = action.payload;
//     },
//     removeShareholder: (state, action) => {
//       console.log("In removeShareholder. action: ", action);
//       state.shareholders = state.shareholders.filter(
//         (shareholder) => shareholder.shareholder_code !== action.payload
//       );
//     },
//     removeAccountOfficer: (state, action) => {
//       console.log("In removeAccountOfficer. action: ", action);
//       state.accountOfficers = state.accountOfficers.filter(
//         (accountOfficer) => accountOfficer.officer_code !== action.payload
//       );
//     },
//     setExcelFile: (state, action) => {
//       state.excelFile = action.payload;
//     },
//     setExcelFileError: (state, action) => {
//       state.excelFileError = action.payload;
//     },
//     setExcelData: (state, action) => {
//       state.excelData = action.payload;
//     },
//     setFileName: (state, action) => {
//       console.log("In setFileName method in userSlice ", action.payload);
//       state.fileName = action.payload;
//     },
//     setFileType: (state, action) => {
//       console.log("In setFileType method in userSlice ", action.payload);
//       state.fileType = action.payload;
//     },
//     setShareholderAccountOfficers: (state, action) => {
//       console.log(action.payload);
//       // state.accountOfficers.push(...action.payload);
//       // state.AccountOfficerstatus = 'idle';
//       state.shareholderAccountOfficers = action.payload;
//     },
//     updateAdminList: (state, actions) => {
//       console.log('Payload: ', actions.payload);
//       state.administrators.splice(0, 0, actions.payload);
//     },
//   },
//   extraReducers(builder) {
//     builder
//       .addCase(getAdministrators.pending, (state, action) => {
//         state.status = "loading";
//       })
//       .addCase(getAdministrators.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.page_index_back = action.payload.page_index;
//         state.pages = action.payload.total_pages;
//         state.administrators.push(...action.payload.administrators);
//       })
//       .addCase(getAdministrators.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.error.message;
//       })
//       .addCase(getShareholders.pending, (state, action) => {
//         state.dynamicStatus = "loading";
//       })
//       .addCase(getShareholders.fulfilled, (state, action) => {
//         state.dynamicStatus = "succeeded";
//         state.page_index_back = action.payload.page_index;
//         state.pages = action.payload.total_pages;
//         state.shareholders.push(...action.payload.shareholders);
//       })
//       .addCase(getShareholders.rejected, (state, action) => {
//         state.dynamicStatus = "failed";
//         state.error = action.error.message;
//       })
//       .addCase(getHistory.pending, (state, action) => {
//         state.Historystatus = "loading";
//       })
//       .addCase(getHistory.fulfilled, (state, action) => {
//         state.Historystatus = "succeeded";
//         state.activities.push(...action.payload);
//       })
//       .addCase(getHistory.rejected, (state, action) => {
//         state.Historystatus = "failed";
//       })
//       .addCase(getAccountOfficers.pending, (state, action) => {
//         state.AccountOfficerstatus = "loading";
//       })
//       .addCase(getAccountOfficers.fulfilled, (state, action) => {
//         state.AccountOfficerstatus = "succeeded";
//         state.page_index_back = action.payload.page_index;
//         state.pages = action.payload.total_pages;
//         state.accountOfficers.push(...action.payload.accountOfficers);
//       })
//       .addCase(getAccountOfficers.rejected, (state, action) => {
//         state.AccountOfficerstatus = "failed";
//       })
//       .addCase(getTickets.pending, (state, action) => {
//         state.ticketStatus = "loading";
//       })
//       .addCase(getTickets.fulfilled, (state, action) => {
//         console.log('Tickets returning: ', action.payload);
//         state.ticketStatus = "succeeded";
//         state.tickets = action.payload;
//       })
//       .addCase(getTickets.rejected, (state, action) => {
//         state.ticketStatus = "failed";
//         state.error = action.error.message;
//       })
//       .addCase(getPaymentModes.pending, (state, action) => {
//         state.paymentModesStatus = "loading";
//       })
//       .addCase(getPaymentModes.fulfilled, (state, action) => {
//         state.paymentModesStatus = "succeeded";
//         state.paymentModes = action.payload;
//       })
//       .addCase(getPaymentModes.rejected, (state, action) => {
//         state.paymentModesStatus = "failed";
//         state.error = action.error.message;
//       })
//       .addCase(getTaxRates.pending, (state, action) => {
//         state.taxRateStatus = "loading";
//       })
//       .addCase(getTaxRates.fulfilled, (state, action) => {
//         state.taxRateStatus = "succeeded";
//         state.taxRates.push(...action.payload);
//       })
//       .addCase(getTaxRates.rejected, (state, action) => {
//         state.taxRateStatus = "failed";
//       })
//   },
// });
// export const shareholderOfficersThunkCall = createAsyncThunk('shareholderAccountOfficers', async(shareholder_code, {getState, dispatch}) => {
//   console.log('In myThunkCall');
//   const response = await getShareholderAccountOfficers(shareholder_code)
//   console.log('In myThunk: ', response);
//   dispatch(setShareholderAccountOfficers(response));  
// });

// export const {
//   replaceOutdatedAdmin,
//   replaceOutdatedTicket,
//   addAccountOfficer,
//   addTicket,
//   resetDynamicStatus,
//   updateAdminList,
//   callAccountOfficers,
//   setPage,
//   setShareholderAccountOfficers,
//   addFName,
//   addLName,
//   addPrimaryEmail,
//   addSecondaryEmail,
//   addPrimaryPhone,
//   addSecondaryPhone,
//   addPrimaryAddress,
//   addSecondaryAddress,
//   addAUsername,
//   addOfficerCode,
//   addFirstName,
//   updateFirstName,
//   addLastName,
//   updateLastName,
//   addEmail,
//   updateEmail,
//   addCompanyID,
//   setDynamicUser,
//   setAdminFunctionalGroups,
//   setShareholderHistory,
//   addFunctinalGroups,
//   addModuleAuthorities,
//   addPhone,
//   updatePhone,
//   addUsername,
//   updateUsername,
//   setModuleStatus,
//   setAccountOfficerStatus,
//   setCurrentTicket,
//   setCurrentCountry,
//   removeAdministrator,
//   removeFunctionalGroupAdmin,
//   updateAdministratorDetails,
//   updateTicketsDetails,
//   setExcelFile,
//   setExcelFileError,
//   setExcelData,
//   setFileName,
//   setFileType,
//   removeShareholder,
//   removeAccountOfficer,
//   addShareholderName,
//   addShareholderTaxRate,
//   addShareholderOtherName,
//   addShareholderComNumber,
//   addShareholderScd,
//   addShareholderPrimaryPhone,
//   addShareholderPrimaryEmail,
//   addShareholderSecondaryPhone,
//   addShareholderSecondaryEmail,
//   addShareholderPaymentMode,
//   addShareholderPaymentAccount,
//   addShareholderPaymentAccountName,
//   addShareholderPaymentBranchName,
//   addShareholderPaymentBankName,
//   addShareholderPaymentBranchAddress,
//   addShareholderTin,
//   addShareholderCategory,
//   addBrokerCode,
//   addShares,
//   searchShareholders,
// } = userSlice.actions;

// export default userSlice.reducer;
