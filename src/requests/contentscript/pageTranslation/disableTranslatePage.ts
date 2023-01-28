import { buildTabRequest } from '../../utils/requestBuilder';

export const [disableTranslatePageFactory, disableTranslatePage] = buildTabRequest(
	'disableTranslatePage',
	{
		factoryHandler:
			({ pageContext }) =>
				async () => {
					const domTranslator = pageContext.getDOMTranslator();
					if (domTranslator === null) {
						throw new Error('DOM translator are empty');
					}

					if (!domTranslator.isRun()) {
						throw new Error('Page is not translated');
					}

					pageContext.getTranslationKnobs().updatedPageTranslationState(null);
				},
	},
);
