import { isRejectedWithValue } from "@reduxjs/toolkit";
import { useToast } from "@chakra-ui/react";

/**
 * Log a warning and show a toast!
 */
export const rtkQueryErrorLogger = (api) => (next) => (action) => {
  const toast = useToast();
  // RTK Query uses `createAsyncThunk` from redux-toolkit under the hood, so we're able to utilize these matchers!
  if (isRejectedWithValue(action)) {
    console.warn("We got a rejected action!");
    toast({
      title: action.error.data.message,
      position: "top-right",
      variant: "left-accent",
      status: "warning",
      duration: 2000,
      isClosable: true,
    });
  }

  return next(action);
};
