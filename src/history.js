import { createBrowserHistory } from 'history';

export default createBrowserHistory();


/**
 * Le BrowserRouter de react se sert de l'objet history du navigateur pour
 * permettre de faire des redirection dans les composants.
 *
 * Problème : cet object history n'est pas passé au action creator. Si on veut
 * faire une redirection dans un action creator, on est obligé de lui fournir
 * history. Et s'assurer que cet action creator est appellé partout avec.
 *
 * Ou alors, on utile le PlainRouter, au lieu du BrowserRouter, et on crée
 * notre propre classe history, qu'on passera dans le PlainRouter.
 *
 *
 */
