import { createRouter, createWebHistory } from 'vue-router';

import wwPage from './views/wwPage.vue';

import { initializeData, initializePlugins, onPageUnload } from '@/_common/helpers/data';

let router;
const routes = [];

function scrollBehavior(to) {
    if (to.hash) {
        return {
            el: to.hash,
            behavior: 'smooth',
        };
    } else {
        return { top: 0 };
    }
}

 
/* wwFront:start */
import pluginsSettings from '../../plugins-settings.json';

// eslint-disable-next-line no-undef
window.wwg_designInfo = {"id":"e3554bc9-8f1e-4f74-b654-04532338b6cc","homePageId":"4850e3ba-df46-4eb4-ba3b-0f2c52463628","authPluginId":"1fa0dd68-5069-436c-9a7d-3b54c340f1fa","baseTag":null,"defaultTheme":"light","langs":[{"lang":"en","default":true}],"background":{},"workflows":[],"pages":[{"id":"2e083814-f2a0-4727-8e01-aeb896093474","linkId":"2e083814-f2a0-4727-8e01-aeb896093474","name":"My Courses","folder":null,"paths":{"en":"courses","default":"courses"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"809081d3-ddcc-4a77-84f7-d5de4df1158f","sectionTitle":"Blank","linkId":"f7df35cc-ee64-4997-ac20-c88c55f44a68"},{"uid":"991aecd8-e48f-420a-bd30-c66602fcfe3e","sectionTitle":"MobileMenu","linkId":"ee80eaf4-3a42-4430-9819-454b353a337a"}],"pageUserGroups":[],"title":{"en":"","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"2f3aedd4-704b-4239-ba2a-b0f53b136fdb","linkId":"2f3aedd4-704b-4239-ba2a-b0f53b136fdb","name":"Students","folder":null,"paths":{"en":"students","default":"students"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"b70a96c1-a466-4c8b-a77d-ffe3aa7ceeb1","sectionTitle":"Blank","linkId":"b6f549f9-d771-4ff1-8634-c4b7fb6e7193"},{"uid":"0b69c0d6-7712-4cdb-a4fe-51310a222116","sectionTitle":"MobileMenu","linkId":"58ea104d-8965-4832-8e74-ea6b2ba95b59"}],"pageUserGroups":[],"title":{"en":"","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"0218c37c-8374-4489-887b-efebd531b9ad","linkId":"0218c37c-8374-4489-887b-efebd531b9ad","name":"Mockup","folder":null,"paths":{"en":"mockup","default":"mockup"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"f90cb1d5-5d3b-4f35-ab54-b8973c62207e","sectionTitle":"Section","linkId":"0346e5be-fd8b-446e-9022-b965671542b8"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"27d6a948-478b-450f-811c-2ef337b9cc79","linkId":"27d6a948-478b-450f-811c-2ef337b9cc79","name":"Forgot Pass Page","folder":null,"paths":{"en":"forgot-pass-page","default":"forgot-pass-page"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"2184b45e-1c09-4c57-873c-cff24ca56f38","sectionTitle":"Reset password","linkId":"7bdf9932-6915-4f52-b037-247602779474"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"33ced544-3075-4a16-8937-e27c0287fdfb","linkId":"33ced544-3075-4a16-8937-e27c0287fdfb","name":"Dashboard (copy)","folder":null,"paths":{"en":"dashboard-copy","default":"dashboard-copy"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"dec3937f-6c38-4446-affc-f8fa501420ec","sectionTitle":"Blank","linkId":"be1b971b-1b9d-484b-b158-3210034c0235"},{"uid":"46ea0f94-2325-4588-9293-d25d4a6f562a","sectionTitle":"MobileMenu","linkId":"e79a8491-4cf3-4d65-aec5-c028d21c99a1"}],"pageUserGroups":[],"title":{"en":"","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"__typename":"PageMeta","socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"4850e3ba-df46-4eb4-ba3b-0f2c52463628","linkId":"4850e3ba-df46-4eb4-ba3b-0f2c52463628","name":"Dashboard","folder":null,"paths":{"en":"dashboard","default":"dashboard"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"7ae4e962-fa32-4f3e-8fbc-d0eeec107412","sectionTitle":"Blank","linkId":"de3158ed-fe48-41dc-a922-e1615bc6e8f9"},{"uid":"44538b07-995d-41da-9708-ee827ef808d2","sectionTitle":"MobileMenu","linkId":"1f94285e-3a10-4524-8eb5-763666472052"}],"pageUserGroups":[],"title":{"en":"","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"__typename":"PageMeta","socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"52e20065-d110-4848-b2b6-a8e9cbf0400b","linkId":"52e20065-d110-4848-b2b6-a8e9cbf0400b","name":"Register Page","folder":null,"paths":{"en":"register-page","default":"register-page"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"de35c983-def9-46c9-b43e-31400c49d396","sectionTitle":"Sign up","linkId":"01a76c0e-1edb-4431-8f84-cd1306fcc40e"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"13e7fd57-82da-4a9d-8232-52865e6bf6ce","linkId":"13e7fd57-82da-4a9d-8232-52865e6bf6ce","name":"Login Page","folder":null,"paths":{"en":"login-page","default":"login-page"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"13a8f322-09a1-42bb-a537-b7655f9b8b41","sectionTitle":"Login","linkId":"8a1f83d2-f041-4664-b8de-62fe08c6f143"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""}],"plugins":[{"id":"f9ef41c3-1c53-4857-855b-f2f6a40b7186","name":"Supabase","namespace":"supabase"},{"id":"1fa0dd68-5069-436c-9a7d-3b54c340f1fa","name":"Supabase Auth","namespace":"supabaseAuth"}]};
// eslint-disable-next-line no-undef
window.wwg_cacheVersion = 7;
// eslint-disable-next-line no-undef
window.wwg_pluginsSettings = pluginsSettings;
// eslint-disable-next-line no-undef
window.wwg_disableManifest = false;

const defaultLang = window.wwg_designInfo.langs.find(({ default: isDefault }) => isDefault) || {};

const registerRoute = (page, lang, forcedPath) => {
    const langSlug = !lang.default || lang.isDefaultPath ? `/${lang.lang}` : '';
    let path =
        forcedPath ||
        (page.id === window.wwg_designInfo.homePageId ? '/' : `/${page.paths[lang.lang] || page.paths.default}`);

    //Replace params
    path = path.replace(/{{([\w]+)\|([^/]+)?}}/g, ':$1');

    routes.push({
        path: langSlug + path,
        component: wwPage,
        name: `page-${page.id}-${lang.lang}`,
        meta: {
            pageId: page.id,
            lang,
            isPrivate: !!page.pageUserGroups?.length,
        },
        async beforeEnter(to, from) {
            if (to.name === from.name) return;
            //Set page lang
            wwLib.wwLang.defaultLang = defaultLang.lang;
            wwLib.$store.dispatch('front/setLang', lang.lang);

            //Init plugins
            await initializePlugins();

            //Check if private page
            if (page.pageUserGroups?.length) {
                // cancel navigation if no plugin
                if (!wwLib.wwAuth.plugin) {
                    return false;
                }

                await wwLib.wwAuth.init();

                // Redirect to not sign in page if not logged
                if (!wwLib.wwAuth.getIsAuthenticated()) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthenticatedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }

                //Check roles are required
                if (
                    page.pageUserGroups.length > 1 &&
                    !wwLib.wwAuth.matchUserGroups(page.pageUserGroups.map(({ userGroup }) => userGroup))
                ) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthorizedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }
            }

            try {
                await import(`@/pages/${page.id.split('_')[0]}.js`);
                await wwLib.wwWebsiteData.fetchPage(page.id);

                //Scroll to section or on top after page change
                if (to.hash) {
                    const targetElement = document.getElementById(to.hash.replace('#', ''));
                    if (targetElement) targetElement.scrollIntoView();
                } else {
                    document.body.scrollTop = document.documentElement.scrollTop = 0;
                }

                return;
            } catch (err) {
                wwLib.$store.dispatch('front/showPageLoadProgress', false);

                if (err.redirectUrl) {
                    return { path: err.redirectUrl || '404' };
                } else {
                    //Any other error: go to target page using window.location
                    window.location = to.fullPath;
                }
            }
        },
    });
};

for (const page of window.wwg_designInfo.pages) {
    for (const lang of window.wwg_designInfo.langs) {
        if (!page.langs.includes(lang.lang)) continue;
        registerRoute(page, lang);
    }
}

const page404 = window.wwg_designInfo.pages.find(page => page.paths.default === '404');
if (page404) {
    for (const lang of window.wwg_designInfo.langs) {
        // Create routes /:lang/:pathMatch(.*)* etc for all langs of the 404 page
        if (!page404.langs.includes(lang.lang)) continue;
        registerRoute(
            page404,
            {
                default: false,
                lang: lang.lang,
            },
            '/:pathMatch(.*)*'
        );
    }
    // Create route /:pathMatch(.*)* using default project lang
    registerRoute(page404, { default: true, isDefaultPath: false, lang: defaultLang.lang }, '/:pathMatch(.*)*');
} else {
    routes.push({
        path: '/:pathMatch(.*)*',
        async beforeEnter() {
            window.location.href = '/404';
        },
    });
}

let routerOptions = {};

const isProd =
    !window.location.host.includes(
        '-staging.' + (process.env.WW_ENV === 'staging' ? process.env.VUE_APP_PREVIEW_URL : '')
    ) && !window.location.host.includes(process.env.VUE_APP_PREVIEW_URL);

if (isProd && window.wwg_designInfo.baseTag?.href) {
    let baseTag = window.wwg_designInfo.baseTag.href;
    if (!baseTag.startsWith('/')) {
        baseTag = '/' + baseTag;
    }
    if (!baseTag.endsWith('/')) {
        baseTag += '/';
    }

    routerOptions = {
        base: baseTag,
        history: createWebHistory(baseTag),
        routes,
    };
} else {
    routerOptions = {
        history: createWebHistory(),
        routes,
    };
}

router = createRouter({
    ...routerOptions,
    scrollBehavior,
});

//Trigger on page unload
let isFirstNavigation = true;
router.beforeEach(async (to, from) => {
    if (to.name === from.name) return;
    if (!isFirstNavigation) await onPageUnload();
    isFirstNavigation = false;
    wwLib.globalVariables._navigationId++;
    return;
});

//Init page
router.afterEach((to, from, failure) => {
    wwLib.$store.dispatch('front/showPageLoadProgress', false);
    let fromPath = from.path;
    let toPath = to.path;
    if (!fromPath.endsWith('/')) fromPath = fromPath + '/';
    if (!toPath.endsWith('/')) toPath = toPath + '/';
    if (failure || (from.name && toPath === fromPath)) return;
    initializeData(to);
});
/* wwFront:end */

export default router;
