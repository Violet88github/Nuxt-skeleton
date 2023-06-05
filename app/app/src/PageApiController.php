<?php
use SilverStripe\Control\Controller;
use SilverStripe\Control\HTTPRequest;
use SilverStripe\Control\HTTPResponse;
use SilverStripe\CMS\Model\SiteTree;

class PageApiController extends Controller
{
    public function index(HTTPRequest $request)
    {
        $slug = $request->param('Slug');
        $page = SiteTree::get()->filter('URLSegment', $slug)->first();
        
        if (!$page) {
            return $this->httpError(404, 'Page not found');
        }

        $responseData = [
            'title' => $page->Title,
        ];

        $jsonResponse = json_encode($responseData);

        $response = new HTTPResponse($jsonResponse);
        $response->addHeader('Content-Type', 'application/json');

        return $response;
    }
}
