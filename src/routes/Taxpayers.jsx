import {
  Box,
  Button,
  CircularProgress,
  Divider,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  Modal,
  Paper,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { theme } from "../utils/theme";
import ResponsiveDrawer from "../components/RespnsiveLayout";
import {
  Close,
  CloudUpload,
  Create,
  FollowTheSigns,
  MoreVert,
  Print,
} from "@mui/icons-material";
import {
  cardPColor,
  dangerColor,
  dashenBankColor,
  successColor,
} from "../utils/colors";
import { useTranslation } from "react-i18next";
import { DataGrid } from "@mui/x-data-grid";
import { useGetAllData, usePostData } from "../hooks/useRQData";
import { LoadingProgress } from "../components/Loading";
import { Feedback } from "../components/Snackbar";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { display } from "@mui/system";

const columns = [
  {
    field: "firstName",
    headerName: "Fullname",
    width: 250,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  {
    field: "username",
    headerName: "Username",
    width: 150,
  },
  {
    field: "country",
    headerName: "Country",
    width: 230,
  },
  { field: "tin", headerName: "TIN", width: 250 },
  { field: "occupation", headerName: "Occupation", width: 250 },
  { field: "phone", headerName: "Mobile", width: 250 },
  {
    field: "status",
    headerName: "Actions",
    width: 250,
    type: "actions",
    getActions: (params) => [
      <>
        <FormGroup>
          <Box
            sx={{
              px: 3,
              borderRadius: "7px",
            }}
          >
            <Create />
            <Print />
            <MoreVert />
          </Box>
        </FormGroup>
      </>,
    ],
  },
];

const rows = [
  {
    id: 1,
    firstName: "Snow",
    lastName: "Nati",
    username: "Jon",
    country: "Ethiopia",
    createdAt: "Jan-02-2022",
    status: true,
  },
  {
    id: 2,
    firstName: "Bereket",
    lastName: "Zergaw",
    username: "Jon",
    country: "Ethiopia",
    createdAt: "Jan-02-2022",
    status: false,
  },
];

const TaxPayers = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { t } = useTranslation();
  const { data, isLoading, isSuccess, refetch } = useGetAllData("taxpayers");

  console.log(data?.data);
  const succ = () => {
    if (isLoading == false && isSuccess) {
      return true;
    }
    return false;
  };

  // hook form to add new tax payers

  const {
    control,
    handleSubmit,
    reset,
    data: userPostData,
    formState: { errors },
  } = useForm({});

  const {
    mutate: addTaxPayer,
    isLoading: postLoading,
    data: dataPost,
    error: errorPost,
    isSuccess: isAddUserSuccess,
  } = usePostData("taxpayers", userPostData);
  console.log(data);
  return (
    <>
      <ResponsiveDrawer />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 1,
        }}
      >
        <Paper
          sx={{
            width: "600px",
            borderRadius: "10px",
            display: "flex",
          }}
        >
          <Box
            sx={{
              width: "5%",
              bgcolor: "primary.main",
              borderRadius: "10px 0 0 10px",
            }}
          ></Box>
          <Box sx={{ width: "95%" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                borderRadius: "7px 0 0 0",
                m: 1,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  p: 1,
                  px: 2,
                  width: "95%",
                }}
              >
                <Box>
                  <Typography variant="h6" fontWeight={"bold"}>
                    New Tax Payers Registrations
                  </Typography>
                  <Typography variant="subtitle1">
                    Create New Tax Payer
                  </Typography>
                </Box>
                <IconButton>
                  <Close onClick={handleClose} />
                </IconButton>
              </Box>
            </Box>
            <Divider />
            <Box sx={{ P: 3 }}>
              <Grid
                container
                sx={{
                  px: 1,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Grid xs={12} md={5} sx={{ mx: 1 }}>
                  <Controller
                    name="tin"
                    control={control}
                    rules={{
                      required: "TIN is required",
                    }}
                    render={({ field }) => (
                      <TextField
                        margin="normal"
                        fullWidth
                        size="small"
                        label="TIN"
                        helperText={errors?.tin ? errors?.tin?.message : ""}
                        error={errors?.tin}
                        {...field}
                      />
                    )}
                  />
                </Grid>
                <Grid xs={12} md={5} sx={{ mx: 1 }}>
                  <Controller
                    name="firstName"
                    control={control}
                    rules={{
                      required: "Firstname is required",
                    }}
                    render={({ field }) => (
                      <TextField
                        margin="normal"
                        fullWidth
                        size="small"
                        label="Firstname"
                        helperText={
                          errors?.firstName ? errors?.firstName?.message : ""
                        }
                        error={errors?.firstName}
                        {...field}
                      />
                    )}
                  />
                </Grid>
                <Grid xs={12} md={5} sx={{ mx: 1 }}>
                  <Controller
                    name="idn"
                    control={control}
                    rules={{
                      required: "idn is required",
                    }}
                    render={({ field }) => (
                      <TextField
                        margin="normal"
                        fullWidth
                        size="small"
                        label="idn"
                        helperText={errors?.idn ? errors?.idn?.message : ""}
                        error={errors?.idn}
                        {...field}
                      />
                    )}
                  />
                </Grid>
                <Grid xs={12} md={5} sx={{ mx: 1 }}>
                  <Controller
                    name="phone"
                    control={control}
                    rules={{
                      required: "phone is required",
                    }}
                    render={({ field }) => (
                      <TextField
                        margin="normal"
                        fullWidth
                        size="small"
                        label="phone"
                        helperText={errors?.phone ? errors?.phone?.message : ""}
                        error={errors?.phone}
                        {...field}
                      />
                    )}
                  />
                </Grid>
                <Divider />
                <Grid
                  xs={12}
                  sx={{
                    display: "flex",
                    justifyContent: "right",
                    p: 2,
                    position: "relative",
                    margin: "auto",
                    bottom: 0,
                  }}
                >
                  <Button
                    color="primary"
                    onClick={handleSubmit((data, e) => {
                      addTaxPayer(data);
                    })}
                    variant="contained"
                    disabled={postLoading}
                    sx={{ px: 4 }}
                    startIcon={
                      postLoading ? <CircularProgress size={13} /> : null
                    }
                  >
                    Add
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Paper>
      </Modal>

      <Feedback
        status={isSuccess && !isLoading}
        message={t("fd_taxpayers_loaded_succ")}
        duration={2000}
        type={"success"}
      />
      <Box
        sx={{
          [theme.breakpoints.not("xs")]: {
            ml: "270px",
            mr: 1,
            mt: 4,
          },
          m: 2,
          ml: 3,
        }}
      >
        <Paper
          sx={{
            p: 3,
            mr: 1,
            borderRadius: "7px",
            bgcolor: cardPColor,
            color: "white",
          }}
        >
          <Typography variant="h5" fontWeight={"bold"}>
            {t("taxpayers")}
          </Typography>
          <Grid container>
            <Grid md="10">
              <Typography>{t("taxpayerDescr")}</Typography>
            </Grid>
            <Grid md="2" sx={{ textAlign: "right" }}>
              <Button
                variant="contained"
                startIcon={<CloudUpload />}
                sx={{
                  textTransform: "none",
                  border: "1px solid white",
                }}
              >
                {t("importFile")}
              </Button>
            </Grid>
          </Grid>
        </Paper>
        <Box
          sx={{
            mt: 1,
            p: 4,
            display: "flex",
            justifyContent: "right",
            mr: 1,
          }}
        >
          {isLoading ? <LoadingProgress /> : null}

          <Box>
            <Button variant="contained" sx={{ mx: 1 }}>
              {t("export")}
            </Button>
          </Box>
          <Button variant="contained" onClick={handleOpen}>
            {t("add-new")}
          </Button>
        </Box>
        {/* MUI Data Grid */}
        <Box sx={{ height: 400, width: "99%" }}>
          {data?.data ? (
            <DataGrid
              rows={data?.data}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              disableSelectionOnClick
              experimentalFeatures={{ newEditingApi: true }}
            />
          ) : null}
        </Box>
      </Box>
    </>
  );
};

export { TaxPayers };
