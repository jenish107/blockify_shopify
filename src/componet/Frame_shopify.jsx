import {
  ActionList,
  AppProvider,
  LegacyCard,
  ContextualSaveBar,
  FormLayout,
  Frame,
  Layout,
  Loading,
  Modal,
  Navigation,
  Page,
  SkeletonBodyText,
  SkeletonDisplayText,
  SkeletonPage,
  TextContainer,
  TextField,
  Toast,
  TopBar,
} from "@shopify/polaris";
import {
  ArrowLeftIcon,
  HomeIcon,
  OrderIcon,
  ChatIcon,
  TargetIcon,
  ProductIcon,
} from "@shopify/polaris-icons";
import { BrowserRouter, Routes, Route } from "react-router";
import { useState, useCallback, useRef } from "react";

import Main_content from "./Main_content";
import Navigation_bar from "./Navigation_bar";
import Checkout_rules from "./page/Checkout_rules";
import Cash_on_Delive from "./page/Cash_on_Delive";
import Checkout from "./page/Checkout";
import Settings from "./page/Settings";
import Pricing from "./page/Pricing";
import Analytics from "./page/Analytics";

export default function Frame_shopify() {
  const defaultState = useRef({
    emailFieldValue: "dharma@jadedpixel.com",
    nameFieldValue: "Jaded Pixel",
  });
  const skipToContentRef = useRef(null);

  const [toastActive, setToastActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isDirty, setIsDirty] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [userMenuActive, setUserMenuActive] = useState(false);
  const [mobileNavigationActive, setMobileNavigationActive] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const [nameFieldValue, setNameFieldValue] = useState(
    defaultState.current.nameFieldValue
  );
  const [emailFieldValue, setEmailFieldValue] = useState(
    defaultState.current.emailFieldValue
  );
  const [storeName, setStoreName] = useState(
    defaultState.current.nameFieldValue
  );
  const [supportSubject, setSupportSubject] = useState("");
  const [supportMessage, setSupportMessage] = useState("");

  const handleSubjectChange = useCallback(
    (value) => setSupportSubject(value),
    []
  );
  const handleMessageChange = useCallback(
    (value) => setSupportMessage(value),
    []
  );
  const handleDiscard = useCallback(() => {
    setEmailFieldValue(defaultState.current.emailFieldValue);
    setNameFieldValue(defaultState.current.nameFieldValue);
    setIsDirty(false);
  }, []);
  const handleSave = useCallback(() => {
    defaultState.current.nameFieldValue = nameFieldValue;
    defaultState.current.emailFieldValue = emailFieldValue;

    setIsDirty(false);
    setToastActive(true);
    setStoreName(defaultState.current.nameFieldValue);
  }, [emailFieldValue, nameFieldValue]);
  const handleNameFieldChange = useCallback((value) => {
    setNameFieldValue(value);
    value && setIsDirty(true);
  }, []);
  const handleEmailFieldChange = useCallback((value) => {
    setEmailFieldValue(value);
    value && setIsDirty(true);
  }, []);
  const handleSearchResultsDismiss = useCallback(() => {
    setSearchActive(false);
    setSearchValue("");
  }, []);
  const handleSearchFieldChange = useCallback((value) => {
    setSearchValue(value);
    setSearchActive(value.length > 0);
  }, []);
  const toggleToastActive = useCallback(
    () => setToastActive((toastActive) => !toastActive),
    []
  );
  const toggleUserMenuActive = useCallback(
    () => setUserMenuActive((userMenuActive) => !userMenuActive),
    []
  );
  const toggleMobileNavigationActive = useCallback(
    () =>
      setMobileNavigationActive(
        (mobileNavigationActive) => !mobileNavigationActive
      ),
    []
  );
  const toggleIsLoading = useCallback(
    () => setIsLoading((isLoading) => !isLoading),
    []
  );
  const toggleModalActive = useCallback(
    () => setModalActive((modalActive) => !modalActive),
    []
  );

  const toastMarkup = toastActive ? (
    <Toast onDismiss={toggleToastActive} content="Changes saved" />
  ) : null;

  const userMenuActions = [
    {
      items: [{ content: "Community forums" }],
    },
  ];

  const contextualSaveBarMarkup = isDirty ? (
    <ContextualSaveBar
      message="Unsaved changes"
      saveAction={{
        onAction: handleSave,
      }}
      discardAction={{
        onAction: handleDiscard,
      }}
    />
  ) : null;

  const userMenuMarkup = (
    <TopBar.UserMenu
      actions={userMenuActions}
      name="Dharma"
      detail={storeName}
      initials="D"
      open={userMenuActive}
      onToggle={toggleUserMenuActive}
    />
  );

  const searchResultsMarkup = (
    <ActionList
      items={[
        { content: "Shopify help center" },
        { content: "Community forums" },
      ]}
    />
  );

  const searchFieldMarkup = (
    <TopBar.SearchField
      onChange={handleSearchFieldChange}
      value={searchValue}
      placeholder="Search"
    />
  );

  const topBarMarkup = (
    <TopBar
      showNavigationToggle
      userMenu={userMenuMarkup}
      searchResultsVisible={searchActive}
      searchField={searchFieldMarkup}
      searchResults={searchResultsMarkup}
      onSearchResultsDismiss={handleSearchResultsDismiss}
      onNavigationToggle={toggleMobileNavigationActive}
    />
  );

  const navigationMarkup = <Navigation_bar />;

  const loadingMarkup = isLoading ? <Loading /> : null;

  const skipToContentTarget = (
    <a id="SkipToContentTarget" ref={skipToContentRef} tabIndex={-1} />
  );

  const actualPageMarkup = (
    <Routes>
      <Route path="/" element={<Main_content />} />
      <Route path="/Checkout-rules" element={<Checkout_rules />} />
      <Route path="/Cash-on-Delive" element={<Cash_on_Delive />} />
      <Route path="/Checkout" element={<Checkout />} />
      <Route path="/Settings" element={<Settings />} />
      <Route path="/Pricing" element={<Pricing />} />
      <Route path="/Analytics" element={<Analytics />} />
    </Routes>
  );
  // const actualPageMarkup = <Main_content />;

  const loadingPageMarkup = (
    <SkeletonPage>
      <Layout>
        <Layout.Section>
          <LegacyCard sectioned>
            <TextContainer>
              <SkeletonDisplayText size="small" />
              <SkeletonBodyText lines={9} />
            </TextContainer>
          </LegacyCard>
        </Layout.Section>
      </Layout>
    </SkeletonPage>
  );

  const pageMarkup = isLoading ? loadingPageMarkup : actualPageMarkup;

  const modalMarkup = (
    <Modal
      open={modalActive}
      onClose={toggleModalActive}
      title="Contact support"
      primaryAction={{
        content: "Send",
        onAction: toggleModalActive,
      }}
    >
      <Modal.Section>
        <FormLayout>
          <TextField
            label="Subject"
            value={supportSubject}
            onChange={handleSubjectChange}
            autoComplete="off"
          />
          <TextField
            label="Message"
            value={supportMessage}
            onChange={handleMessageChange}
            autoComplete="off"
            multiline
          />
        </FormLayout>
      </Modal.Section>
    </Modal>
  );

  const logo = {
    width: 86,
    topBarSource:
      "https://cdn.shopify.com/s/files/1/2376/3301/files/Shopify_Secondary_Inverted.png",
    contextualSaveBarSource:
      "https://cdn.shopify.com/s/files/1/2376/3301/files/Shopify_Secondary_Inverted.png",
    accessibilityLabel: "Shopify",
  };

  return (
    <div style={{ height: "500px" }}>
      <Frame
        logo={logo}
        topBar={topBarMarkup}
        navigation={navigationMarkup}
        showMobileNavigation={mobileNavigationActive}
        onNavigationDismiss={toggleMobileNavigationActive}
        skipToContentTarget={skipToContentRef}
      >
        {contextualSaveBarMarkup}
        {loadingMarkup}
        {pageMarkup}
        {toastMarkup}
        {modalMarkup}
      </Frame>
    </div>
  );
}
