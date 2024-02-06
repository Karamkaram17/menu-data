interface API_Response<Data> {
  message?: string;
  showMessage?: boolean;
  messageState?: "success" | "warning" | "error";
  notificationType?: "popup" | "snackbar";
  snackbarDuration?: number;
  error?: string;
  trace?: string;
  data: Data;
}

const d: API_Response<string> = { data: "" };
