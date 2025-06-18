import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import {
    useBlockProps,
    MediaUpload,
    MediaUploadCheck,
    InspectorControls,
    RichText
} from '@wordpress/block-editor';
import {
    PanelBody,
    Button,
    TextControl
} from '@wordpress/components';
import { video } from '@wordpress/icons';

import './editor.scss';

registerBlockType('visioni-periferiche/hero-section', {
    edit: ({ attributes, setAttributes }) => {
        const blockProps = useBlockProps({
            className: 'hero-section-editor'
        });

        const { videoUrl, title, subtitle, description, buttonText, buttonUrl } = attributes;

        return (
            <>
                <InspectorControls>
                    <PanelBody title={__('Hero Settings', 'visioni-periferiche')}>
                        <MediaUploadCheck>
                            <MediaUpload
                                onSelect={(media) => setAttributes({ videoUrl: media.url })}
                                allowedTypes={['video']}
                                value={videoUrl}
                                render={({ open }) => (
                                    <Button onClick={open} variant="secondary">
                                        {videoUrl ? __('Change Video', 'visioni-periferiche') : __('Select Video', 'visioni-periferiche')}
                                    </Button>
                                )}
                            />
                        </MediaUploadCheck>
                        
                        <TextControl
                            label={__('Button URL', 'visioni-periferiche')}
                            value={buttonUrl}
                            onChange={(value) => setAttributes({ buttonUrl: value })}
                        />
                    </PanelBody>
                </InspectorControls>

                <div {...blockProps}>
                    <div className="hero-content-editor">
                        <RichText
                            tagName="h1"
                            value={title}
                            onChange={(value) => setAttributes({ title: value })}
                            placeholder={__('Enter title...', 'visioni-periferiche')}
                        />
                        
                        <RichText
                            tagName="p"
                            className="subtitle"
                            value={subtitle}
                            onChange={(value) => setAttributes({ subtitle: value })}
                            placeholder={__('Enter subtitle...', 'visioni-periferiche')}
                        />
                        
                        <RichText
                            tagName="p"
                            className="description"
                            value={description}
                            onChange={(value) => setAttributes({ description: value })}
                            placeholder={__('Enter description...', 'visioni-periferiche')}
                        />
                        
                        <RichText
                            tagName="span"
                            className="button-text"
                            value={buttonText}
                            onChange={(value) => setAttributes({ buttonText: value })}
                            placeholder={__('Button text...', 'visioni-periferiche')}
                        />
                    </div>
                    
                    {videoUrl && (
                        <div className="video-preview">
                            <video src={videoUrl} muted loop autoPlay />
                        </div>
                    )}
                </div>
            </>
        );
    },
    
    save: () => null // Dynamic block
});